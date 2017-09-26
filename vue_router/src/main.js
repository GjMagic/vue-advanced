import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import './assets/css/app.css'
import router from './router'

new Vue({
    el: '#app',
    router,
    template: '<App />',
    components: { App }
})