<template>
  <div>
    <nav-top></nav-top>
    <!--用户信息-->
    <div class="user-head-fr">
      <img src="http://static.greencyw.com/customer/userCenterHeadBg.jpg?v=1212" alt>
      <div class="user-head-info">
        <img
          class="user-head-radius"
          src="http://static.greencyw.com/app/user-head-default.jpg"
          alt
        >
        <p class="user-name">岳阳市人大食堂</p>
        <p class="user-id">13512101110</p>
      </div>
    </div>
    <!--信息查询-->
    <div class="user-center-list">
      <van-cell value="历史订单" icon="todo-list-o" is-link to="../index">
        <template slot="title">
          <span class="custom-text">我的订单</span>
        </template>
      </van-cell>
      <van-cell value="管理" icon="location-o" is-link to="../index">
        <template slot="title">
          <span class="custom-text">收货地址</span>
        </template>
      </van-cell>
      <van-cell value icon="service-o" is-link to="../index">
        <template slot="title">
          <span class="custom-text">申请售后</span>
          <van-tag type="danger">New</van-tag>
        </template>
      </van-cell>
    </div>
    <!--退出登录-->
    <div class="login-btn-f">
      <van-button class="login-btn" size="normal" type="danger">退出登录</van-button>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import { List, Row, Col, Cell, CellGroup, Tag, Button } from "vant";
import NavTop from "../base/nav-top";
import NavBottom from "../base/nav-bottom";

export default {
  name: "userCenter",

  components: {
    NavTop,
    NavBottom,
    [List.name]: List,
    [Row.name]: Row,
    [Col.name]: Col,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Tag.name]: Tag,
    [Button.name]: Button
  }
};
</script>

<style scoped>
img {
  vertical-align: middle;
}
.user-head-fr {
  position: relative;
}
.user-head-info {
  top: 20%;
  width: 100%;
  text-align: center;
  position: absolute;
}
.user-head-radius {
  border-radius: 50%;
  overflow: hidden;
  width: 15%;
}
.user-name {
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
}
.user-id {
  font-size: 0.8rem;
  line-height: 1rem;
  color: #7d7e80;
}
.user-center-list {
  margin-top: 1rem;
}
.custom-text {
  margin-right: 5px;
  vertical-align: middle;
}
.login-btn-f {
  margin: 2rem 1rem;
}
.login-btn {
  width: 100%;
}
</style>