import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'
import fastclick from 'fastclick'

import 'assets/stylus/index.styl'

fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
