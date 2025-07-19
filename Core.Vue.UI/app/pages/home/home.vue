<script setup lang="ts">
	import { Home } from './home.ts';
	import Navigation from '../../pages/layout/navigation/Navigation.vue';

	const home = new Home();
</script>

<template>
	<div class="home">
		<Navigation></Navigation>
	</div>
</template>

<style scoped>
</style>
