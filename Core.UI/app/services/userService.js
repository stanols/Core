import BaseService from './baseService';

class UserService extends BaseService {
	constructor() {
		super('User');
	}

	async login(requestData) {
		const response = await this.api.post(`${this.basePath}/Login`, requestData);
		const { data } = response;
		const { token } = data;

		this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

		return data;
	}

	async logout(requestData) {
		const response = await this.api.post(`${this.basePath}/Logout`, requestData);
		const { data } = response;

		delete this.api.defaults.headers.common["Authorization"];

		return data;
	}
}

export default UserService;