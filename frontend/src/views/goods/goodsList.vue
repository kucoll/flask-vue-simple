<template>
    <div>
        <nav-top></nav-top>

        <van-row class="goods-list-3n-list">
            <van-col span="8" class="goods-list-3n">
                <router-link to="/goods/goodsInfo">
                    <img src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png?v=20180207" alt="">
                    <p class="list-3n-name">新泰和油麦菜名字再加长一点</p>
                    <p class="list-3n-price">￥<span class="list-3n-price-num">2.17</span>/斤</p>
                    <p class="list-3n-price-old">零售 <span class="line-through">￥2.47/斤</span></p>
                </router-link>
            </van-col>
            <van-col span="8" class="goods-list-3n">
                <router-link to="/goods/goodsInfo">
                    <em class="goods-badge-3"><i class="goods-badge-over"></i></em><!--售罄图片-->
                    <img src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png?v=20180207" alt="">
                    <p class="list-3n-name">新泰和油麦菜</p>
                    <p class="list-3n-price">￥<span class="list-3n-price-num">2.17</span>/斤</p>
                    <p class="list-3n-price-old">零售 <span class="line-through">￥2.47/斤</span></p>
                </router-link>
            </van-col>
            <van-col span="8" class="goods-list-3n">
                <router-link to="/goods/goodsInfo">
                    <img src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png?v=20180207" alt="">
                    <p class="list-3n-name">新泰和油麦菜名字再加长一点</p>
                    <p class="list-3n-price">￥<span class="list-3n-price-num">2.17</span>/斤</p>
                    <p class="list-3n-price-old">零售 <span class="line-through">￥2.47/斤</span></p>
                </router-link>
            </van-col>
        </van-row>

        <nav-bottom></nav-bottom>
    </div>
</template>

<script>
    import { List, Row, Col } from 'vant';
    import navTop from "@/views/base/nav-top";
    import navBottom from "@/views/base/nav-bottom";

    export default {
        name: "goodsList",

        components:{
            navBottom,
            navTop,
            [List.name]:List,
            [Row.name]:Row,
            [Col.name]:Col,
        },

        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },

        methods: {
            onClickGoodsinfo:function() {
                router.push('/goods/goodsInfo');
            },
            onLoad() {}
        }

    }
</script>

<style scoped>

    .goods-list-3n{background:#fff;border:1px #ececec solid; border-left: none; border-top: none}
    .goods-list-3n-list>.goods-list-3n:nth-child(3n){border-right:none}
    .goods-list-3n img{width: 100%; height: auto}
    .list-3n-name{padding: 0 0.25rem;font-size: 0.9rem; height: 2rem; line-height: 1rem}
    .list-3n-price{padding:0.25rem; font-size: 0.7rem; line-height: 1rem; color: #ff6000}
    .list-3n-price-old{padding:0 0.25rem 0.5rem 0.25rem; font-size: 0.7rem; line-height: 1rem; color: #888; }
    .line-through{text-decoration: line-through}
    .list-3n-price-num{font-size: 1rem;}

    .goods-badge-3 {
        position: relative;
        z-index: 0;
        display: block;}
    .goods-badge-over{width: 100%;height: 135px;background: url(http://static.greencyw.com/app/goods_over.png) center no-repeat; background-size: 90%; position: absolute;}/*今日售罄*/
    @media screen and (max-width:320px){
        .goods-badge-over{width: 100%;height: 108px;background: url(http://static.greencyw.com/app/goods_over.png) center no-repeat; background-size: 80%; position: absolute;}
    }
    @media screen and (min-width:500px) and (max-width:650px){
        .goods-badge-over{width: 100%;height: 180px;background: url(http://static.greencyw.com/app/goods_over.png) center no-repeat; background-size: 80%; position: absolute;}
    }
    @media screen and (min-width:650px) {
        .goods-badge-over{width: 100%;height: 225px;background: url(http://static.greencyw.com/app/goods_over.png) center no-repeat; background-size: 80%; position: absolute;}
    }


</style>