<script setup lang="ts">
	import { ref, reactive, computed, watch, onMounted, onUpdated, onUnmounted } from 'vue';
	import { userService } from '../../../services/user.service.ts';
	import { AuthorizationHelper } from '../../../helpers/authorization.helper.ts';
	import { push } from '../../../router/router.ts';

	const model = reactive({
		userName: '',
		userPassword: ''
	});

	const onLogin = async () => {
		const data = await userService.login({ name: model.userName, password: model.userPassword });
		AuthorizationHelper.setAuthorizationData(data);

		// if (AuthorizationHelper.isAuthorized()) {
		// 	push("/home");
		// }
	};
</script>

<template>
	<div class="login">
		<h3>Sign In</h3>

		<!-- <form v-on:submit="onLogin">
			<div class="form-group">
				<label for="name" class="form-label">Name</label>
				<input v-model="model.userName" id="name" name="name" class="form-control" type="text" placeholder="Login" />
			</div> -->
			<!-- <div class="form-group mt-2">
				<label for="password" class="form-label">Password</label>
				<input v-model="model.userPassword" id="password" name="name" class="form-control" type="password" placeholder="Password" />
			</div>
			<div class="form-group mt-4">
				<button class="form-control btn btn-primary" type="submit" >Sign In</button>
			</div>
			<div class="form-group mt-4">
				<a
					class="form-control btn btn-secondary" 
					role="button"
					href="#/account/registration"
					v-on:click="register"
				>
					Sign Up
				</a>
			</div> -->
		<!-- </form> -->
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
