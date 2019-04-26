<template>
    <div>
        <nav-top></nav-top>

        <!--订单信息-->
        <div class="order-user-info">
            <van-cell-group>
                <van-cell title="订单状态" value="已下单" />
                <van-cell title="订单号" value="123456789" />
                <van-cell title="下单时间" value="2019/4/22" />
                <van-cell title="交货日期" value="2019/4/25" />
                <van-cell title="订单单位" value="市人大食堂一楼" />
            </van-cell-group>
            <van-cell-group class="order-user-add">
                <van-cell title="收货人" value="张先生" />
                <van-cell title="联系电话" value="13511101110" />
                <van-cell title="收货地址" value="市人大地址很长很长的地址地址地址地址"/>
            </van-cell-group>
        </div>
        <!--商品信息-->
        <div class="buy-list">
            <div class="buy-list-item">
                <img class="buy-goods-img" src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png" alt="">
                <div class="buy-list-text-full">
                    <p class="buy-list-name">新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜新泰和油麦菜</p>
                    <p class="buy-list-price">单价：￥2.17/斤<span class="buy-list-num">数量：x2</span></p>
                    <p class="buy-list-advance">预付：￥5.12</p>
                    <p class="buy-list-subtotal">称重：0.86斤<span class="buy-list-amount">称重金额：￥5.04</span></p>
                </div>
            </div>
            <div class="buy-list-item">
                <img class="buy-goods-img" src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png" alt="">
                <div class="buy-list-text-full">
                    <p class="buy-list-name">新泰和油麦菜</p>
                    <p class="buy-list-price">单价：￥2.17/斤<span class="buy-list-num">数量：x2</span></p>
                    <p class="buy-list-advance">预付：￥5.12</p>
                    <p class="buy-list-subtotal">称重：0.86斤<span class="buy-list-amount">称重金额：￥5.04</span></p>
                </div>
            </div>
            <div class="buy-list-item">
                <img class="buy-goods-img" src="http://img.greencyw.com/%E6%B2%B9%E9%BA%A602.png" alt="">
                <div class="buy-list-text-full">
                    <p class="buy-list-name">新泰和油麦菜</p>
                    <p class="buy-list-price">单价：￥2.17/斤<span class="buy-list-num">数量：x2</span></p>
                    <p class="buy-list-advance">预付：￥5.12</p>
                    <p class="buy-list-subtotal">称重：0.86斤<span class="buy-list-amount">称重金额：￥5.04</span></p>
                </div>
            </div>
        </div>

        <van-cell-group class="buy-list-money">
            <van-cell title="总金额：" value="￥16.20" class="buy-list-total"/>
        </van-cell-group>

        <nav-bottom></nav-bottom>
    </div>
</template>

<script>
    import { Cell,CellGroup, ContactCard, ContactList, ContactEdit } from 'vant'
    import navTop from '@/views/base/nav-top'
    import navBottom from '@/views/base/nav-bottom'

    export default {
        name: "orders",
        components: {
            navTop,
            navBottom,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [ContactCard.name]: ContactCard,
            [ContactList.name]: ContactList,
            [ContactEdit.name]: ContactEdit,

        },
    }
</script>

<style scoped>

    .buy-list{background: #fff; border-top:1px #ddd solid; margin-top: 1rem }
    .buy-list-item{padding: 0 0.25rem;overflow: hidden; border-bottom:1px #ddd solid; position: relative }
    .buy-goods-img{ margin:0.5rem; border: 1px #e7e7e7 solid; width: 5rem; float: left}
    .buy-list-text-full{margin:0.5rem 0.5rem 0 6.25rem;font-size: 0.8rem; width: auto}
    .buy-list-name{font-size: 0.9rem; overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2; }
    .buy-list-price{color: #7d7e80; padding-top: 0.25rem}
    .buy-list-subtotal{padding: 0.25rem 0;}
    .buy-list-advance{padding-top: 0.25rem; color: #7d7e80}
    .buy-list-num{float: right}
    .buy-list-amount{float: right; color: #f44}
    .buy-list-money{margin-top: 1rem}
    .buy-list-total .van-cell__value{color: #f44}
    .van-cell{background: none}
    .order-user-add{margin-top: 01rem}
    .order-user-add::before{    content: '';
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        position: absolute;
        background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
        background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
        background-size: 80px;}
</style>