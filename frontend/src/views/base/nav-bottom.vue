<template>
  <van-tabbar v-model="activeIndex" active-color="#6bba2b">
    <van-tabbar-item icon="wap-home" url="/index">首页</van-tabbar-item>
    <van-tabbar-item icon="cart-o" info="5" url="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="orders-o" url="/orderList">订单</van-tabbar-item>
    <van-tabbar-item icon="user-o" url="/user/userCenter">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  //name: "NavBottom",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  },
  created() {
    console.log(this.$route)
  },
  computed: {
    activeIndex() {
      let path = this.$route.path;
      let _activeIndex = -1;
      switch (path) {
        case "/index":
          _activeIndex = 0;
          break;
        case "/cart":
          _activeIndex = 1;
          break;
        case "/orderList":
          _activeIndex = 2;
          break;
        case "/user/userCenter":
          _activeIndex = 3;
          break;
      }
      return _activeIndex;
    }
  }
};
</script>

<style scoped>
</style>