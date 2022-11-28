import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import { WebVitals } from '@zyf2e/monitor-web-performance';
// // import { WebVitals } from '../build/web-performance';

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

// import webSee from '../build/dist/bundle.js';

Vue.use(webSee, {
  dsn: 'http://test.com/error',
  apikey: '123-2223-123-123',
  silentRecordScreen: true,
  userId: '123'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
