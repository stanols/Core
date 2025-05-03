<script setup lang="ts">
	import { ref, computed, watch, onMounted, onUpdated, onUnmounted } from 'vue';
	import { Login } from './login.ts';

	const properties = defineProps({
		title: String
	});

	const login = new Login();

	ref(login.userName);
	ref(login.userPassword);

	onMounted(login.onMounted);
	onUpdated(login.onUpdated);
	onUnmounted(login.onUnmounted);
</script>

<template>
	<div class="login">
		<h3>{{ properties.title }}</h3>

		<form v-on:submit="login.login">
			<div class="form-group">
				<label for="name" class="form-label">Name</label>
				<input v-model="login.userName" id="name" name="name" class="form-control" type="text" placeholder="Login" />
			</div>
			<div class="form-group mt-2">
				<label for="password" class="form-label">Password</label>
				<input v-model="login.userPassword" id="password" name="name" class="form-control" type="password" placeholder="Password" />
			</div>
			<div class="form-group mt-4">
				<button class="form-control btn btn-primary" type="submit" >Sign In</button>
			</div>
			<div class="form-group mt-4">
				<a
					class="form-control btn btn-secondary" 
					role="button"
					href="#/account/registration"
					v-on:click="login.register"
				>
					Sign Up
				</a>
			</div>
		</form>
	</div>
</template>

<style scoped>
	.login {
		form {
			margin: 0 auto;
			max-width: 320px;
		}

		h3 {
			max-width: 320px;
			margin: 0 auto;
			padding: 20px 0px;
		}

		.error {
			margin: 5px 0;
		}
	}
</style>
