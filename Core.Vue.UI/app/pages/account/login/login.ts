import { computed } from 'vue';
import { userService } from '../../../services/userService';
import { AuthorizationHelper } from '../../../helpers/authorization.helper';
import router from '../../../router/router';

export default class Login {
	userName: string = '';
	userPassword: string = '';

	constructor() {

	}

	onMounted() {

	}

	onUpdated() {

	}

	onUnmounted() {

	}

	async login() {
		const data = await userService.login({ name: this.userName, password: this.userPassword });
		AuthorizationHelper.setAuthorizationData(data);

		if (AuthorizationHelper.isAuthorized()) {
			router.push('/home');
		}
	}

	register() {
		router.push('/registration');
	}
}
