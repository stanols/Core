import type { RouteParams, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home/home.vue';
import Summary from '../pages/summary/summary.vue';
import Account from '../pages/account/account.vue';

export type AppRouteNames =
	| 'home'
	| 'summary'
	| 'account'
	| '**';

export const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'home',
		path: '/home',
		component: Home,
	},
	{
		name: 'summary',
		path: '/summary',
		component: Summary
	},
	{
		name: 'account',
		path: '/account',
		component: Account
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

export default router;
