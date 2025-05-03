<script setup lang="ts">
	import { ref } from 'vue';
	import { App } from './app.ts';
	import Login from './pages/login/Login.vue';
	import Header from './pages/layout/header/Header.vue';
	import Footer from './pages/layout/footer/Footer.vue';

	const app = new App();
	const title = ref('Sign In');
</script>

<template>
	<div class="app">
		<Header></Header>
		<!-- <Login v-bind:title="title"></Login> -->
		<Footer></Footer>
	</div>
</template>

<style scoped>
</style>
