import type { RouteParams, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import { AuthorizationHelper } from '../helpers/authorization.helper';

export type AppRouteNames =
	| 'home'
	| 'summary'
	| 'account'
	| 'login'
	| 'registration'
	| '**';

export const routes: RouteRecordRaw[] = [
	{
		name: 'default',
		path: '/',
		component: () => import('../pages/home/home.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'home',
		path: '/home',
		component: () => import('../pages/home/home.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'summary',
		path: '/summary',
		component: () => import('../pages/summary/summary.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'account',
		path: '/account',
		component: () => import('../pages/account/account.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('../pages/account/login/login.vue'),
		meta: { requiresAuth: false }
	},
	{
		name: 'registration',
		path: '/registration',
		component: () => import('../pages/account/registration/registration.vue'),
		meta: { requiresAuth: false }
	}
];

const router = createRouter({
	linkActiveClass: 'active',
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const isAuthorized = AuthorizationHelper.isAuthorized();

	if (to.meta.requiresAuth && !isAuthorized) {
		next('/login');
	}
	else if (to.path === '/login' && isAuthorized) {
		next('home');
	}
	else {
		next();
	}
})

export default router;
