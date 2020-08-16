import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'homepage',
			component: () => import('@/components/homepage')
		},
		{
			path: '/report',
			name: 'report',
			component: () => import('@/components/report')
		},
		{
			path: '/upload',
			name: 'upload',
			component: () => import('@/components/upload')
		},
		{
			path: '/projList',
			name: 'projList',
			component: () => import('@/components/projList')
		},
		{
			path: '/distribution',
			name: 'distribution',
			component: () => import('@/components/distribution')
		},
		{
			path: '/trend',
			name: 'trend',
			component: () => import('@/components/trend')
		}
	]
})
