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
			path: '/upload',
			component: Layout,
			children: [
				{
					path: '',
					component: () => import('@/components/upload'),
					name: 'upload'
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
		},
		{
			path: '/distribution',
			component: Layout,
			children: [
				{
					path: '',
					component: () => import('@/components/distribution'),
					name: 'distribution'
				}
			]
		},
		{
			path: '/projList',
			component: Layout,
			children: [
				{
					path: '',
					component: () => import('@/components/projList'),
					name: 'projList'
				}
			]
		}
	]
})
