import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GildataDesign from 'GildataDesign';
import 'GildataDesign/lib/theme-chalk/index.css';

// import { WebVitals } from '@zyf2e/monitor-web-performance';

// new WebVitals({
//   appId: 'allen-performance',
//   version: '1.0.0',
//   reportCallback: (metrics) => {
//     // xhr or fetch send data
//     console.log(metrics, 'metrics');
//   },
//   immediately: true
// });

import webSee from '../build/browser/index';

console.log('webSee', webSee);

Vue.use(webSee, {
  dsn: 'http://test.com/error',
  apikey: '123-2223-123-123'
});

Vue.config.productionTip = false;
Vue.use(GildataDesign);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
