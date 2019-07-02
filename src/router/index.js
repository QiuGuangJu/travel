import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    // 异步组件 所有组件都可以用
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
   }, {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/search/Search')
   }],
   // 滚动行为，期望路由滚动到 x: 0 y:0 的位置
   scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0}
   }
})