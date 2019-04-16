<template>
  <div id="app">
    <div id="nav" class="nav">
      {{btnName}}
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/goods">goods</router-link>|
      <van-button type="default">默认按钮</van-button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "app",
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      btnName: Button.name
    };
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .nav {
    
    
  }
}
</style>
