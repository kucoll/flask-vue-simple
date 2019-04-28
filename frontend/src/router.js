import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Login from './views/login.vue'
import Index from './views/index.vue'
import goodsInfo from './views/goods/goodsInfo.vue'
import goodsList from './views/goods/goodsList.vue'
import cart from './views/cart/cart.vue'
import orderInfo from './views/user/orderInfo.vue'
import userCenter from './views/user/userCenter.vue'
import orderList from './views/order/orderList.vue'

Vue.use(Router)



const routes = [

  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: "登录"
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Index
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('./views/user/index'),
    // children: [
    //   { path: 'login', component: () => import('./views/login') }
    // ]
  },
  , {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/goods/goodsInfo',
    name: 'goodsInfo',
    component: goodsInfo
  }, {
    path: '/goods/goodsList',
    name: 'goodsList',
    component: goodsList
  }, {
    path: '/cart',
    name: 'cart',
    component: cart
  }, {
    path: '/user/orderInfo',
    name: 'orderInfo',
    component: orderInfo
  }, {
    path: '/user/userCenter',
    name: 'userCenter',
    component: userCenter
  }, {
    path: '/orderList',
    name: 'orderList',
    component: orderList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    name: 'goods',
    component: () => import('./views/goods'),
    meta: {
      title: '商品详情'
    }
  }, {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({ routes: routes, mode: 'history' })

export {
  router
}
