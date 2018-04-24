import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '@/views/Home/Home'
import City from '@/views/City/City'
import Detail from '@/views/Detail/Detail' */

/* 当app.js超过1MB时，我们就需要使用"异步组件实现按需加载" */

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home') // 异步组件
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/views/City/City')
  }, {
    path: '/detail/:id', // :参数(动态路由) 注: 注意冒号前加/
    name: 'Detail',
    component: () => import('@/views/Detail/Detail')
  }],
  scrollBehavior (to, from, savedPosition) { // 滚动行为
    return { x: 0, y: 0 }
  }
})
