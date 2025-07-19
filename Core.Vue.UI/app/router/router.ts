import type { RouteParams, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home/Home.vue';
import Summary from '../pages/summary/Summary.vue';
import Account from '../pages/account/Account.vue';
import Login from '../pages/account/login/Login.vue';
import Registration from '../pages/account/registration/Registration.vue';
import { AuthorizationHelper } from '../helpers/authorization.helper';

export type AppRouteNames =
	| 'home'
	| 'summary'
	| 'account'
	| '**';

export const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: Home,
		meta: { requiresAuth: true }
	},
	{
		name: 'home',
		path: '/home',
		component: Home,
		meta: { requiresAuth: true }
	},
	{
		name: 'summary',
		path: '/summary',
		component: Summary,
		meta: { requiresAuth: true }
	},
	{
		name: 'account',
		path: '/account',
		component: Account,
		meta: { requiresAuth: true }
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('../pages/account/login/Login.vue'),
		meta: { requiresAuth: false }
	},
	{
		name: 'registration',
		path: '/registration',
		component: Registration,
		meta: { requiresAuth: false }
	}
];

const router = createRouter({
	linkActiveClass: 'active',
	history: createWebHashHistory(),
	routes,
});

export function push(name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
	return params === undefined
		? router.push({ name })
		: router.push({ name, params });
}

router.beforeEach((to, from, next) => {
	const isAuthorized = AuthorizationHelper.isAuthorized();

	if (to.meta.requiresAuth && !isAuthorized) {
		next('/login')
	} else {
		next()
	}
})

export default router;
