<script setup lang="ts">
	import { ref } from 'vue';
	import { userService } from '../../../services/user.service.ts';
	import { AuthorizationHelper } from '../../../helpers/authorization.helper.ts';
	import router from '../../../router/router.ts';

	const firstName = ref('John');

	const onLogout = async () => {
		await userService.logout();

		AuthorizationHelper.removeAuthorizationData();
		router.push({ name: 'login', replace: true });
	};
</script>

<template>
	<header class="container">
		<div class="content">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<router-link to="/home" class="navbar-brand">Home</router-link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarText">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<router-link to="/summary" class="nav-link">Summary</router-link>
							</li>
						</ul>
					</div>

					<div class="justify-content-end navbar-nav">
						<div class="nav-item">
							<a
								role="button"
								class="nav-link"
								tabindex="0"
								href="#"
							>
								Hello, {{ firstName }}!
							</a>
						</div>
						<div class="nav-item" @click="onLogout">
							<a
								role="button"
								class="nav-link"
								tabindex="0"
								href="#"
							>
								Logout
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<style scoped>
</style>
