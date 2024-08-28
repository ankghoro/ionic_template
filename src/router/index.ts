import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/tabs/shop'
	},
	{
		path: '/tabs/',
		component: TabsPage,
		children: [
		{
			path: '',
			redirect: '/tabs/shop'
		},
		{
			path: 'shop',
			component: () => import('@/views/TabShop.vue')
		},
		{
			path: 'blog',
			component: () => import('@/views/TabBlog.vue')
		},
		{
			path: 'account',
			component: () => import('@/views/TabAccount.vue')
		}
		]
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
