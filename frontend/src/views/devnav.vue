<!--  -->
<template>
  <div>
    <div id="nav" class="nav">
      {{btnName}}
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/goods">goods</router-link>|
      <van-button type="default">默认按钮</van-button>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='less' scoped>
</style>