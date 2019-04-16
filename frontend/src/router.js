import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/login.vue'

Vue.use(Router)

const routes =  [
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/login')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    name: 'goods',
    component: () => import('./views/goods'),
    meta: {
      title: '商品详情'
    }
  }
]

routes.forEach(route => {
  route.path = route.path || '/'+(route.name || '')
})

const router = new Router({routes: routes, mode: 'history'})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if(title) {
    document.title = title
  }
  next()
})

export {
  router
}
