<script setup lang="ts">
	import { ref } from 'vue';
	import { Footer } from './footer.ts';

	const footer = new Footer();
</script>

<template>
	<footer class="footer fixed-bottom">
		<div class="container">
			<div class="content">
				<nav class="navbar navbar-expand navbar-dark bg-dark">
					<div class="container">
						<span>© Pavel Kaliukhovich</span>
					</div>
				</nav>
			</div>
		</div>
	</footer>
</template>

<style>
	.footer {
		color: #ffffff;
	}
</style>
