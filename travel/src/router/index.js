import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import City from '@/views/City/City'
import Detail from '@/views/Detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id', // :参数(动态路由) 注: 注意冒号前加/
      name: 'Detail',
      component: Detail
    }],
    scrollBehavior (to, from, savedPosition) { // 滚动行为
      return { x: 0, y: 0 }
    }
})
