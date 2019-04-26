<!--  -->
<template>
  <div>
    <h2>User Index</h2>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  },
  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='less' scoped>
</style>