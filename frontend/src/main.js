import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import FastClick from 'fastclick'
import NProgress from 'nprogress'
import './style//nprogress.css' //nprogress样式
import { Tabbar, TabbarItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Stepper} from 'vant'

  Vue.use(Tabbar).use(TabbarItem)
    .use(GoodsAction)
    .use(GoodsActionBigBtn)
    .use(GoodsActionMiniBtn)
    .use(Stepper)

//import aui from "./assets/js/aui.js";

Vue.use(VueAxios, axios)


FastClick.attach(document.body)

// 配置 NProgress
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
    //window.scrollTo(0, 0);
    //Vue.nextTick(() => window.syncPath());
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
