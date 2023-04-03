import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import webSee from '../../dist';
import webSee from '../../src/index.ts';

Vue.use(webSee, {
  dsn: 'http://localhost:8080/reportData',
  apikey: 'abcd',
  silentRecordScreen: true, // 开启录屏
  silentWhiteScreen: true,
  skeletonProject: true,
  userId: '123',
  handleHttpStatus(response) {
    let { code } = response;
    // code为200，接口正常，反之亦然
    return code === 200 ? true : false;
  },
});

Vue.use(ElementUI, { size: 'mini' });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
