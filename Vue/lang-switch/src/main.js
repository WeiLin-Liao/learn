import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import { Dropdown, DropdownMenu, DropdownItem, } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Dropdown).use(DropdownMenu).use(DropdownItem)

const i18n = new VueI18n({
	locale: 'zh', // 定义默认语言为中文
	messages: {
		'zh': require('@/assets/languages/zh.js'),
		'zh-tw': require('@/assets/languages/zh-tw.js'),
		'en': require('@/assets/languages/en.js')
	}
})

new Vue({
	i18n,
  render: h => h(App),
}).$mount('#app')
