<script setup lang="ts">
	import { ref } from 'vue';
	import { App } from './app.ts';
	import Login from './pages/account/login/Login.vue';
	import Header from './pages/layout/header/Header.vue';
	import Footer from './pages/layout/footer/Footer.vue';
	import Home from './pages/home/Home.vue';
	import { AuthorizationHelper } from './helpers/authorization.helper.ts';

	const app = new App();
	const title = ref('Sign In');
	const isAuthorized = ref(AuthorizationHelper.isAuthorized());
</script>

<template>
	<div class="app">
		<div v-if="isAuthorized">
			<Header></Header>
			<Home></Home>
			<Footer></Footer>
		</div>
		<div v-else>
			<Login></Login>
		</div>
	</div>
</template>

<style scoped>
</style>
