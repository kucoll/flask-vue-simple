<template>
    <van-goods-action>
        <div><van-stepper class="goods-num" v-model="value" /></div>
        <van-goods-action-mini-btn
                icon="cart-o"
                info="5"
                text="购物车"
                @click="onClickMiniBtn"
        />
        <van-goods-action-big-btn
                text="加入购物车"
                @click="onClickBigBtn"
        />
    </van-goods-action>
</template>

<script>
    import { GoodsAction,GoodsActionBigBtn,Stepper } from 'vant'

    export default {
        name: "goods-buy",
        conponents:{
            [GoodsAction.name]:GoodsAction,
            [GoodsActionBigBtn .name]:GoodsActionBigBtn,
            [Stepper.name]:Stepper,
        },
        data() {
            return {
                value: 1
            }
        },
        methods: {
            onClickMiniBtn() {
                Toast('点击图标');
            },
            onClickBigBtn() {
                Toast('点击按钮');
            }
        }
    }
</script>

<style scoped>
    .goods-num{padding: 0 1rem; line-height: 50px; background: #fff}
</style>