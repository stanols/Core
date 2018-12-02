import BaseService from './baseService';

class UserService extends BaseService {
	constructor() {
		super('User');
	}

	async authenticate(requestData) {
		const tokenKey = 'token';
		const response = await this.api.post(`${this.basePath}/Authenticate`, requestData);
		const { data } = response;
		const { token } = data;

		this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		localStorage.setItem(tokenKey, data.token);

		return data;
	}
}

export default UserService;