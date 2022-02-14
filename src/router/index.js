import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rem',
    name: 'Rem',
    component: () => import(/* webpackChunkName: "rem" */ '../views/Rem.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/shop/all',
    name: 'ShopAll',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopAll.vue')
  },
  {
    path: '/shop/cart',
    name: 'ShopCart',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopCart.vue')
  },
  {
    path: '/shop/checkout',
    name: 'ShopCheckout',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopCheckout.vue')
  },
  {
    path: '/shop/checkout/finish',
    name: 'ShopCheckoutFinish',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopCheckoutFinish.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
