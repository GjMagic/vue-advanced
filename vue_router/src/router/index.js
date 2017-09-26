import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import notFound from '@/components/notFound'

let router = new Router({
    mode: 'history',
    /* 5.linkActiveClass属性把router-link-active改为了active，
       也就是说router-link-active名称是可以改变的
    */
    linkActiveClass: 'active', // 6.但是这个属性改变的是所有router-link标签激活时的class名
    routes: [{
            path: '/home',
            name: 'Home',
            component: home,
            alias: '/index' // 13.alias指的是'/home'路径的别名，也是路径
        },
        {
            path: '/document',
            name: 'Document',
            component: document
        },
        {
            path: '/about',
            name: 'About',
            component: about
        },
        /* {
            path: '*',
            name: 'NoyFound',
            component: notFound
        }, */
        {
            path: '*',
            // redirect: home // 10.重定向不能是组件名，必须是路径
            // redirect: '/home'
            // redirect: { path: 'about' }
            // redirect: { name: 'Document' }
            redirect: to => { // 11.动态设置重定向的目标
                // 12.to是指目标路由对象，就是访问的路径的路由信息
                if (to.path === '/123') {
                    return '/about'
                } else if (to.path === '/345') {
                    return '/home'
                } else {
                    return '/document'
                }
            }
        }
    ]
})
export default router