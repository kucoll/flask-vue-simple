<template>
  <div class="cart">
    <nav-top></nav-top>

    <!--内容说明-->
    <van-notice-bar text="这里滚动展示相关优惠或支付等说明信息" left-icon="volume-o"/>
    <!--商品清单-->
    <van-row class="buy-list">
      <van-checkbox-group v-model="result" class="buy-list-item">
        <van-checkbox class="buy-list-checkbox"></van-checkbox>
        <img class="buy-goods-img" src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png" alt>
        <div class="buy-list-text">
          <p class="buy-list-name">新泰和油麦菜</p>
          <p class="buy-list-price">单价：￥2.17/斤</p>
          <p class="buy-list-subtotal">小计：￥5.12</p>
          <div class="buy-list-del">
            <img src="http://static.greencyw.com/app/icon_car_delete.png" alt>
          </div>
          <div class="buy-list-stepper">
            <van-stepper v-model="step_value"/>
          </div>
        </div>
      </van-checkbox-group>

      <van-checkbox-group v-model="result" class="buy-list-item">
        <van-checkbox class="buy-list-checkbox"></van-checkbox>
        <img class="buy-goods-img" src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png" alt>
        <div class="buy-list-text">
          <p class="buy-list-name">新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜</p>
          <p class="buy-list-price">单价：￥2.17/斤</p>
          <p class="buy-list-subtotal">小计：￥5.12</p>
          <div class="buy-list-del">
            <img src="http://static.greencyw.com/app/icon_car_delete.png" alt>
          </div>
          <div class="buy-list-stepper">
            <van-stepper v-model="step_value"/>
          </div>
        </div>
      </van-checkbox-group>
    </van-row>
    <!--结算栏-->
    <van-submit-bar class="bottom-bar" :price="3050" button-text="提交订单" @submit="commitCart">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>

    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import { SubmitBar, Row, Col, Checkbox, CheckboxGroup, NoticeBar } from "vant";
import navTop from "../base/nav-top";
import navBottom from "../base/nav-bottom";

export default {
  name: "cart",
  components: {
    navTop,
    navBottom,
    [SubmitBar.name]: SubmitBar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [NoticeBar.name]: NoticeBar
  },
  data() {
    return {
      step_value: 1,
      checkAll: false,
      list: [" ", " "],
      result: [" ", " "]
    }
  },
  methods:{
      commitCart() {
          alert("提交订单！")
      }
  }
};
</script>

<style scoped>
.cart {
  padding-bottom: 50px;
}
.buy-list {
  background: #fff;
  border-top: 1px #ddd solid;
}
.buy-list-item {
  padding: 0 0.25rem;
  overflow: hidden;
  border-bottom: 1px #ddd solid;
  position: relative;
}
.buy-list-checkbox {
  margin-top: 2rem;
  float: left;
  margin-left: 0.5rem;
}
.buy-goods-img {
  margin: 0.8rem 0.5rem;
  border: 1px #e7e7e7 solid;
  width: 4.5rem;
  float: left;
}
.buy-list-text {
  margin: 0.5rem;
  font-size: 0.8rem;
  width: 86%;
}
.buy-list-name {
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.buy-list-price {
  color: #7d7e80;
  padding-top: 0.25rem;
}
.buy-list-subtotal {
  padding: 0.25rem 0;
  color: #f44;
}
.buy-list-del {
  position: absolute;
  width: 1.6rem;
  padding: 0.5rem;
  top: 0rem;
  right: 0.5rem;
}
.buy-list-stepper {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}
.bottom-bar {
  z-index: 1;
}
.van-submit-bar__bar {
  padding-left: 1rem;
}
</style>