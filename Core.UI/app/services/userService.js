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

	async logout() {
		await this.api.post(`${this.basePath}/Logout`);

		delete this.api.defaults.headers.common["Authorization"];
	}
}

export default UserService;