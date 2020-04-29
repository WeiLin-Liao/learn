import Vue from 'vue'
import App from './App.vue'
import Api from './axios'

Vue.config.productionTip = false
Vue.prototype.$api = Api

new Vue({
  render: h => h(App),
}).$mount('#app')
