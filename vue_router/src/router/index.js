import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import notFound from '@/components/notFound'
import study from '../views/study.vue'
import work from '../views/work.vue'
import hobby from '../views/hobby.vue'
import slider from '../views/slider.vue'
import user from '../components/user.vue'

let router = new Router({
    mode: 'history',
    /* 5.linkActiveClass属性把router-link-active改为了active，
       也就是说router-link-active名称是可以改变的
    */
    linkActiveClass: 'active', // 6.但是这个属性改变的是所有router-link标签激活时的class名

    // 18.滚动行为scrollBehavior
    scrollBehavior(to, from, savePosition) {
        //console.log(to) // 到达的目标路由对象
        //console.log(from) // 离开的目标路由对象
        //console.log(savePosition) // 记录点击浏览器前进后退按钮时滚动条的位置
        /* return { // return后是期望滚动到的位置对象，也就是savePosition
            x: 0,
            y: 300
        } */
        /* if (savePosition) {
            return savePosition
        } else {
            return { x: 0, y: 0 }
        } */

        // 利用to.hash定位到指定锚点
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    routes: [{
            path: '/', // 根路径
            name: 'Home',
            component: home
        },
        {
            path: '/home',
            name: 'Home',
            component: home,
            alias: '/index' // 13.alias指的是'/home'路径的别名，也是路径
        },
        {
            path: '/user/:tip?/:userId?', // 19.动态路径; params: {userId: 2}
            name: 'User',
            component: user,
        },
        {
            path: '/document',
            name: 'Document',
            components: {
                default: document,
                slider: slider
            }
        },
        {
            path: '/about',
            /* name: 'About', */ // 默认子路由父组件不能有name
            component: about,
            children: [{ // 14.chilfren是子路由属性
                path: '/', // 默认的子路由
                name: 'About', // name可以写在子路由里
                component: study
            }, {
                //path: 'work', // /about/work
                path: '/work', // /work  路径变为相对于根路径
                name: 'Work',
                component: work
            }, {
                path: '/hobby',
                name: 'Hobby',
                component: hobby
            }]
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