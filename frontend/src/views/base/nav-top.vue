<template>
    <van-nav-bar class="nav-h"
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            fixed
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <van-icon name="wap-home" size="1.5em" slot="right" />
    </van-nav-bar>
</template>

<script>
    import { NavBar,Icon  } from 'vant'

    export default {
        //name: "NavTop",
        components: {
            [NavBar.name]:NavBar,
            [Icon.name]:Icon
        },
        methods:{
            onClickLeft(){
                history.go(-1)
            },
            onClickRight(){
                this.$router.push("/index")
            }
        }
    }
</script>

<style scoped>
    

</style>