// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'
import axios from '@/http/axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Object.definePrototype(Vue.prototype, '$moment', { value: moment })
Object.definePrototype(Vue.prototype, '$axios', { value: axios })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
