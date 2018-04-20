import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import './assets/js/flexible'
import 'styles/common.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
