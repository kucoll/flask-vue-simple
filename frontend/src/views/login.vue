<template>
    <div>
        <section class="aui-content aui-margin-b-15">
		<section class="aui-content-padded">
        <ul class="aui-list aui-form-list">
            <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-label aui-font-size-14">
                        用户名：
                    </div>
                    <div class="aui-list-item-input">
                        <input type="text" name="username" id="username" placeholder="请输入您注册的手机号码" v-model="mobile">
                    </div>
                </div>

            </li>

            <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-label aui-font-size-14">
                        登录密码：
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" name="password" id="password" placeholder="请输入您的登录密码" v-model="password" maxlength="6">
                    </div>
                </div>
            </li>
        </ul>
        <div class="aui-btn  aui-btn-block aui-btn-sm aui-margin-t-15 bg-skin" v-bind:class="{ 'aui-btn-info': password }" onclick="userLogin()">登录</div>
        <div class="aui-btn  aui-btn-block aui-btn-sm aui-margin-t-15 bg-skin"   onclick="javascript:window.location.href='/user/new_register/1/0'"><img style="width: 1rem; margin-right: 0.5rem" src="http://static.greencyw.com/app/login_reg.png" alt="">注册</div>
        <div class="aui-row aui-padded-t-15">
            <div class="aui-col-xs-12 aui-font-size-12 aui-text-success ">
                <div class="aui-pull-right aui-font-size-12 aui-padded-l-15" onclick="javascript:window.location.href='/user/backpsw'">
                    忘记密码了？
                </div>
            </div>
        </div>
        <!--其他登录-->
        <div class="aui-margin-t-15">
            <ul class="aui-list aui-form-list aui-padded-t-15">
                <li class="aui-list-item" style="background: none">
                    <div class="aui-list-item-inner aui-list-item-center bg-none">
                        <div><p class="aui-font-size-12">使用第三方账号登录</p></div>
                    </div>
                </li>
                <li class="aui-list-item" style="background: none">
                    <div class="aui-list-item-inner aui-list-item-center aui-list-item-btn bg-none">
                        <!--微信登录-->
                        <div style="cursor: pointer;" onclick="javascript:window.location.href='/user/wxLogin'"><img class="login-other-icon" src="http://static.greencyw.com/app/login_wec.png"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="loginMsg"></div>
    </section>

	</section>
    </div>
</template>
<script>
import aui from '../assets/css/aui.2.0.css'
// @import '../assets/css/aui.2.0.css'
export default {
    data() {
        return {
            mobile:'',
            password: ''
        }
    }
}
</script>
