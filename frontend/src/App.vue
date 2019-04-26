<template>
  <div id="app">
    <!-- <div id="nav" class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user">User</router-link>|
      <router-link to="/user/login">Login</router-link>|
      <router-link to="/goods">goods</router-link>|
      <van-button type="default">{{btnName}}</van-button>
    </div> -->
    <!-- <transition name="router-fade"> slide-->
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script>

export default {
  name: "app",
  components: {
    
  },
  data() {
    return {
      transitionName: "slide-left"
    }
  },
  watch: {
    $route(to, from) {
      console.table(to);
      console.table(from);
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="less">
#app {
  padding: 46px 0 50px 0;
  height: 100%;
  max-width: 768px;
  margin: 0 auto;
}
body {
  background: #f5f5f5;
}
p {
  margin: 0;
}
a {
  color: inherit;
}
img {
  width: 100%;
  height: auto;
}

.bottom-bar {
  padding-bottom: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  //transition: all .5s cubic-bezier(.55,0,.1,1);
  width: 100%;
  background: #fff;
  min-height: 100vh;
  transition: all 1s ease-out;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
