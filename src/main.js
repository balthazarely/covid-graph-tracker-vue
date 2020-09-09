import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Chartkick.configure({ language: "de", mapsApiKey: "AIzaSyC0NWZPa-sGGufJrHdT7L3ixU-ZPyOqkzc" })


Vue.use(Chartkick.use(Chart))



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
