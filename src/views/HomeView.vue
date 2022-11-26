<template>
  <div class="home">
    <jy-button type="primary" @click="fn">js错误</jy-button>
    <jy-button type="primary" @click="timeout">异步错误</jy-button>
    <jy-button type="primary" @click="xhr">xhr请求</jy-button>
    <jy-button type="primary" @click="send">fetch请求</jy-button>
    <br />
    <jy-button type="primary" @click="promiseErr">promise错误</jy-button>
    <jy-button type="primary" @click="resource">加载资源报错</jy-button>
    <!-- <jy-button type="primary" @click="record">js报错</jy-button> -->
    <!-- <jy-button secondary type="primary" @click="play">播放</jy-button> -->
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  mounted() {},
  methods: {
    timeout() {
      setTimeout(() => {
        JSON.parse('');
      });
    },
    fn() {
      let a = undefined;
      if (a.length) {
        console.log('1');
      }
    },
    resource() {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.test.com/index.js';
      document.body.appendChild(script);
    },
    promiseErr() {
      new Promise((resolve) => {
        JSON.parse('');
        resolve();
      });
    },
    send() {
      // 正确的请求
      // fetch('https://jsonplaceholder.typicode.com/posts/2').then((res) => {
      fetch('https://jsonplaceholder.typicode.com/posts11/2').then((res) => {
        console.log('res', res);
      });
    },
    xhr() {
      let ajax = new XMLHttpRequest();
      ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts11/2');
      ajax.setRequestHeader('content-type', 'application/json');
      ajax.onreadystatechange = function () {
        if (ajax.readyState !== 4) return;
        if (ajax.status === 200 || ajax.status === 304) {
          console.log('ajax', ajax);
        }
      };
      ajax.send();
    },
    record() {
      let a = undefined;
      if (a.length) {
        console.log('222');
      }
    }
  }
};
</script>
<style scoped>
#replay {
  width: 500px;
  height: 500px;
}
</style>
