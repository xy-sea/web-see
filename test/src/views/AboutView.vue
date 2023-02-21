<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="jsErr">js错误</el-button>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  methods: {
    fn(name, content) {
      if (!name) return;
      if (typeof content !== 'string') {
        content = JSON.stringify(content);
      }
      window.sessionStorage.setItem(name, content);
    },
    jsErr() {
      var num = new Number(12.34);
      console.log(num.toFixed(-1));
    }
  }
};
</script>
