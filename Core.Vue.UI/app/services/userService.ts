import BaseService from './baseService';
import _ from 'lodash';

export class UserService extends BaseService {
	constructor(){
		super('User');
	}

	async login(requestData) {
		const response = await this.api.post(`${this.basePath}/Login`, requestData);
		const { data } = response;
		const { token } = data;

		this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

		return data;
	}

	async logout() {
		const authHeader = this.api.defaults.headers.common["Authorization"];
		if (!_.isEmpty(authHeader)) {
			await this.api.post(`${this.basePath}/Logout`);
		}

		delete this.api.defaults.headers.common["Authorization"];
	}
}

export const userService = new UserService();
