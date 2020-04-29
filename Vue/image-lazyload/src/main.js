import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/error.png'),
  loading: require('./assets/loading.png'),
  attempt: 1
})

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
