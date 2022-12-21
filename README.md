<div align="center">
    <img src="https://i.postimg.cc/bN7f4YY3/logo.png" alt="websee-logo" height="80">
</div>
<div align="left">
    <p>一款自研的前端监控SDK，可用来收集并上报：代码报错、性能数据、用户行为、加载资源、个性化指标、白屏检测等数据</p>
    <p>亮点1：支持多种错误还原方式：定位源码、播放录屏、记录用户行为</p>
    <p>亮点2：支持项目的白屏检测，兼容有骨架屏、无骨架屏这两种情况</p>
</div>

## 功能

- [√] ✈️ 错误捕获：代码报错、资源加载报错、接口请求报错
- [√] ✈️ 性能数据：FP、FCP、LCP、CLS、TTFB、FID
- [√] ✈️ 用户行为：页面点击、路由跳转、接口调用、资源加载
- [√] ✈️ 加载资源：首页加载资源详情、url、加载时长、是否来自缓存等
- [√] ✈️ 个性化指标：Long Task、Memory 页面内存、首屏加载时间
- [√] ✈️ 白屏检测：检测页面打开后是否一直白屏
- [√] 🚀 手动上报错误
- [√] 🚀 支持多种配置：自定义 hook 与选项
- [√] 🚀 支持的 Web 框架：vue2、vue3、React

## 安装

```bash
$ npm i -S web-see
```

## Vue

```
import webSee from 'web-see';

Vue.use(webSee, {
  dsn: 'http://localhost:8083/reportData', // 上报的地址
  apikey: 'project1', // 项目唯一的id
  userId: '89757', // 用户id
  silentRecordScreen: true, // 开启录屏
  silentWhiteScreen: true, // 开启白屏检测
  skeletonProject: true, // 项目是否有骨架屏
  whiteBoxElements: ['html', 'body', '#app', '#root'] // 白屏检测的容器列表
});
```

## React

```
import webSee from 'web-see';

webSee.init({
  dsn: 'http://localhost:8083/reportData',
  apikey: 'project1',
  userId: '89757'
});
```

## 配置项

|            Name            | Type       | Default                             | Description                                                                                                             |
| :------------------------: | ---------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|           `dsn`            | `string`   | `""`                                | (必传项) 上报接口的地址，post 方法                                                                                      |
|          `apikey`          | `string`   | `""`                                | (必传项) 每个项目对应一个 apikey，唯一标识                                                                              |
|          `userId`          | `string`   | `""`                                | 用户 id                                                                                                                 |
|         `disabled`         | `boolean`  | `false`                             | 默认是开启状态，为 true 时，会将 sdk 禁用                                                                               |
|       `useImgUpload`       | `boolean`  | `false`                             | 为 true 时，使用图片打点上报的方式，参数通过 data=encodeURIComponent(reportData) 拼接到 url 上，默认为 false            |
|    `throttleDelayTime`     | `number`   | `0`                                 | 默认会收集`click`到的标签，该参数可以设置按钮点击节流时间                                                               |
|         `overTime`         | `number`   | `10`                                | 设置接口超时时长，默认 10s                                                                                              |
|      `maxBreadcrumbs`      | `number`   | `20`                                | 用户行为存放的最大容量，超过 20 条，最早的一条记录会被覆盖掉                                                            |
|     `recordScreentime`     | `number`   | `10`                                | 单次录屏时长，silentRecordScreen 设为 true, 开启录屏该设置才有效                                                        |
|        `silentXhr`         | `boolean`  | `false`                             | 默认会监控 xhr，为 true 时，将不再监控                                                                                  |
|       `silentFetch`        | `boolean`  | `false`                             | 默认会监控 fetch，为 true 时，将不再监控                                                                                |
|       `silentClick`        | `boolean`  | `false`                             | 默认会监听 click 事件，当用户点击的标签不是 body 时就会被放入 breadcrumb，为 true，将不在监听                           |
|      `silentHistory`       | `boolean`  | `false`                             | 默认会监控 popstate、pushState、replaceState，为 true 时，将不再监控                                                    |
|       `silentError`        | `boolean`  | `false`                             | 默认会监控 error，为 true 时，将不在监控                                                                                |
| `silentUnhandledrejection` | `boolean`  | `false`                             | 默认会监控 unhandledrejection，为 true 时，将不在监控                                                                   |
|     `silentHashchange`     | `boolean`  | `false`                             | 默认会监控 hashchange，为 true 时，将不在监控                                                                           |
|    `silentPerformance`     | `boolean`  | `false`                             | 默认会上报性能指标，为 true 时，将不在监控                                                                              |
|    `silentRecordScreen`    | `boolean`  | `false`                             | 注意：默认不会开启录屏，为 true 时，开启录屏                                                                            |
|    `silentWhiteScreen`     | `boolean`  | `false`                             | 注意：默认不会开启白屏检测，为 true 时，开启检测                                                                        |
|     `skeletonProject`      | `boolean`  | `false`                             | 有骨架屏的项目建议设为 true，提高白屏检测准确性                                                                         |
|     `whiteBoxElements`     | `array`    | `['html', 'body', '#app', '#root']` | 白屏检测的容器列表，只有 silentWhiteScreen 为 true 时，才生效                                                           |
|    `filterXhrUrlRegExp`    | `regExp`   | `null`                              | 默认为空，所有的接口请求都会被监听，不为空时，filterXhrUrlRegExp.test(xhr.url)为 true 时过滤指定的接口                  |
|   `beforePushBreadcrumb`   | `function` | `null`                              | (自定义 hook) 添加到行为列表前的 hook，有值时，所有的用户行为都要经过该 hook 处理，若返回 false，该行为不会添加到列表中 |
|     `beforeDataReport`     | `function` | `null`                              | (自定义 hook) 数据上报前的 hook，有值时，所有的上报数据都要经过该 hook 处理，若返回 false，该条数据不会上报             |

## 自定义 hook 示例

beforePushBreadcrumb

```javascript
// 添加用户行为
push(data) {
  if (typeof this.beforePushBreadcrumb === 'function') {
    /**
      * 执行用户自定义的hook，若返回false，则这条数据不添加到列表中
      * @param { object } this 当前用户行为的实例
      * @param { object } data 要添加到用户行为列表的数据
      */
    let result = this.beforePushBreadcrumb(this, data);
    if (!result) return;
    this.immediatePush(result);
    return;
  }
  this.immediatePush(data);
}
```

beforeDataReport

```javascript
// 上报数据前的hook
async beforePost(data) {
  let transportData = this.getTransportData(data);
  /**
  * 执行用户自定义的hook，若返回false，则这条数据不会进行上报
  * @param { object } transportData 当前要上报的数据
  */
  if (typeof this.beforeDataReport === 'function') {
    transportData = this.beforeDataReport(transportData);
    if (!transportData) return false;
  }
  return transportData;
}
```

## 手动上报错误示例

```javascript
import webSee from 'web-see';

webSee.log({
  type: 'custom',
  message: '手动报错信息',
  error: new Error('报错'),
});
```

## 白屏检测功能说明

该功能用来检测页面打开后，是否一直处于白屏状态，通过 silentWhiteScreen 设为 true 来开启

白屏检测功能使用：关键点采样对比 + 白屏修正机制，来确保白屏功能的正确性

对于有骨架屏的项目，如果页面一直显示骨架屏，也算是白屏的一种，有骨架屏的项目建议 skeletonProject 设为 true，提高白屏检测准确性

## web-see 相关技术文章

这三篇技术文章，可以帮助你更好地理解 web-see 的技术实现与设计细节 🌼🌼🌼

[从 0 到 1 搭建前端监控平台，面试必备的亮点项目](https://juejin.cn/post/7172072612430872584)

[前端录屏+定位源码，帮你快速定位线上 bug](https://juejin.cn/post/7173596154297810957)

[前端白屏的检测方案，让你知道自己的页面白了](https://juejin.cn/post/7176206226903007292)

## 演示

后台页面

![sea.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93521acd7dd0499295bcd336a8a55fbc~tplv-k3u1fbpfcp-watermark.image?)

演示效果

![web-see.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ca730fd02164501a82eb492a6bf8583~tplv-k3u1fbpfcp-watermark.image?)

## 特别感谢

- [haixin-fang](https://github.com/haixin-fang)

## 后台仓库

[web-see-demo](https://github.com/xy-sea/web-see-demo)
