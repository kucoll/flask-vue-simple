<template>
  <div class="orderList">
    <nav-top></nav-top>

    <van-tabs v-model="orderTabIndex">
      <van-tab title="待支付">
        <van-cell-group class="order-cell">
          <van-cell title="2019-04-21" value="5个商品" icon="orders-o" is-link to="/user/orderInfo"/>
          <van-cell title="￥15.24" value="待支付" label="订单号：1045424785342321"/>
        </van-cell-group>
        <van-cell-group class="order-cell">
          <van-cell title="2019-04-21" value="2个商品" icon="orders-o" is-link to="/user/orderInfo"/>
          <van-cell title="￥15.24" value="待支付" label="订单号：1054834617542321"/>
        </van-cell-group>
      </van-tab>
      <van-tab title="待审核">
        <van-cell-group class="order-cell">
          <van-cell title="2019-04-21" value="2个商品" icon="orders-o" is-link to="/user/orderInfo"/>
          <van-cell title="￥105.24" value="待审核" label="订单号：1041834610342321"/>
        </van-cell-group>
      </van-tab>
      <van-tab title="待收货">
        <van-cell-group class="order-cell">
          <van-cell title="2019-01-21" value="1个商品" icon="orders-o" is-link to="/user/orderInfo"/>
          <van-cell title="￥15.24" value="待收货" label="订单号：1041838852342321"/>
        </van-cell-group>
        <van-cell-group class="order-cell">
          <van-cell title="2019-02-21" value="6个商品" icon="orders-o" is-link to="/user/orderInfo"/>
          <van-cell title="￥15.24" value="待收货" label="订单号：1042434610545421"/>
        </van-cell-group>
      </van-tab>
    </van-tabs>

    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import { Tab, Tabs, Cell, CellGroup } from "vant";
import NavTop from "../base/nav-top";
import NavBottom from "../base/nav-bottom";

export default {
  name: "orderList",
  components: {
    NavTop,
    NavBottom,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
      return {
          orderTabIndex: 0
      }
  }
}
</script>

<style scoped>
.order-cell {
  margin-bottom: 0.5rem;
}
</style>