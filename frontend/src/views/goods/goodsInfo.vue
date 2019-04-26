<template>
    <div class="goodsInfo">
        <nav-top></nav-top>

        <!--图片轮播-->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="http://img.greencyw.com/%E5%B0%8F%E7%B1%B3%E6%A4%9202.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://img.greencyw.com/%E7%BA%A2%E7%BA%BF%E6%A4%9202.jpg" alt=""></van-swipe-item>
        </van-swipe>

        <!--商品属性-->
        <van-panel title="红辣椒" desc="按份购买，每份0.4~0.6斤" status="￥15.00/斤">
            <div>
            </div>
        </van-panel>

        <!--商品详情-->
        <div class="goodsinfo-details">
            <img src="http://img.greencyw.com/%E7%BA%A2%E8%BE%A3%E6%A4%9207.jpg" alt="">
        </div>
        <!--结算-->
        <goodsBuy class="bottom-bar"></goodsBuy>

        <nav-bottom></nav-bottom>
    </div>
</template>

<script>
    import { Swipe,SwipeItem,Lazyload,Panel,} from 'vant'
    import NavTop from '@/views/base/nav-top'
    import goodsBuy from "./goodsBuy"
    import NavBottom from "@/views/base/nav-bottom"

    export default {
        name: "goodsInfo",
        components:{
            NavTop,
            NavBottom,
            goodsBuy,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Lazyload .name]:Lazyload,
            [Panel.name]:Panel,
        },
    }
</script>

<style scoped>
    .goodsInfo{padding-bottom: 50px;}
    .goodsinfo-details{margin-top: 1rem}
    .van-swipe-item{width: 100%; height: auto}
</style>