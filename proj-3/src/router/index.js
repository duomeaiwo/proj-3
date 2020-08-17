import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			component: () => import('@/components/login'),
			hidden: true
		},
		{
			path: '/signup',
			component: () => import('@/components/signup'),
			hidden: true
		},
		{
			path: '/',
			component: Layout,
			redirect: '/homepage',
			children: [
				{
					path: 'homepage',
					component: () => import('@/components/homepage'),
					name: 'homepage'
				}
			]
		},
		{
			path: '/report',
			component: Layout,
			children: [
				{
					path: '',
					component: () => import('@/components/report'),
					name: 'report'
				}
			]
		},
		{
			path: '/trend',
			component: Layout,
			children: [
				{
					path: '',
					component: () => import('@/components/trend'),
					name: 'trend'
				}
			]
		}
	]
})
