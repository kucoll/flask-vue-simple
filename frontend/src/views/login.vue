<template>
  <div>
    <nav-top></nav-top>

    <div class="login-f">
      <div class="login-img">
        <img src="http://static.greencyw.com/app/icon_mine_head_rider.png" alt>
      </div>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      </van-cell-group>
      <div class="login-btn-f">
        <van-button class="login-btn" size="normal" type="primary">登录</van-button>
      </div>
    </div>

    <nav-bottom></nav-bottom>
  </div>
</template>
<script>
import { Button, Field, Cell, CellGroup } from "vant";
import NavTop from "@/views/base/nav-top";
import NavBottom from "@/views/base/nav-bottom";

export default {
  name: "login",
  components: {
    NavTop,
    NavBottom,
    [Field.name]: Field,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.login-f {
  padding-top: 4rem;
}
.login-img {
  width: 4rem;
  height: auto;
  margin: 2rem auto;
}
.login-btn-f {
  margin: 2rem 1rem;
}
.login-btn {
  width: 100%;
}
</style>