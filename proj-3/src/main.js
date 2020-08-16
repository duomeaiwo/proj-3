// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/index.scss'
import './assets/baseColor.scss'
import './icons/iconfont.css'
// import '@/assets/index.scss'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
