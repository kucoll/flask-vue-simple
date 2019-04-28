<template>
  <div class="index-body">
    <nav-top></nav-top>
    <hello-world msg="未全额犬瘟热"/>
    <div class="pic-full-list">
      <ul>
        <li>
          <router-link to="/goods/goodsList">
            <img src="http://img.greencyw.com/shucaitu.jpg" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/goods/goodsList">
            <img src="http://img.greencyw.com/shengxiantu.jpg" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/goods/goodsList">
            <img src="http://img.greencyw.com/调味品.jpg" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/goods/goodsList">
            <img src="http://img.greencyw.com/shuiguotu.jpg" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/goods/goodsList">
            <img src="http://img.greencyw.com/liangyoumiantu.jpg" alt>
          </router-link>
        </li>
      </ul>
    </div>

    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
/*引入组件*/
import NavTop from "@/views/base/nav-top";
import NavBottom from "@/views/base/nav-bottom";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "index",
  components: {
    NavTop,
    NavBottom,
    HelloWorld
  },
  data() {
    return {
      response: {}
    };
  },
  mounted() {
    console.log(this.$http);

    // this.$http.get("/api/random", {
    //     headers: { "X-Requested-With": "214214214" },
    //     params: {
    //       number: 1000
    //     }
    //   })
    //   .then(response => {
    //     this.response = response;
    //     console.log(response.data);
    //   });

    this.$http.post("/api/random", {
      params: {
        number: 1000
      }
    });
    this.axios.post("/api/random", {
      params: {
        number: 1000
      }
    });
  }
};
</script>

<style scoped>
.index-body {
}
.pic-full-list ul li {
  margin: 0.25rem 0;
}
.pic-full-list ul li img {
  width: 100%;
}
</style>