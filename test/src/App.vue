<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo.png" alt="logo" />
      <span class="title">前端监控 test</span>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 10px;

  .header {
    width: 100%;
    padding: 10px 20px;
    height: 60px;
    text-align: left;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    .logo {
      width: 70px;
      height: 42px;
    }
    .title {
      margin-left: 10px;
      font-weight: bold;
    }
  }
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
}
</style>
