import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import webSee from '../../dist';
import webSee from '../../src/index.ts';

Vue.use(webSee, {
  dsn: 'http://localhost:8083/reportData',
  apikey: 'abcd',
  silentRecordScreen: true, // 开启录屏
  silentWhiteScreen: true,
  skeletonProject: true,
  userId: '123',
});

Vue.use(ElementUI, { size: 'mini' });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
