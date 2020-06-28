import axios from 'axios';
import AuthorizationHelper from 'app/helpers/authorizationHelper';

class BaseService {
	constructor(path) {
		this.basePath = `/api/${path}`;
		this.api = axios.create({
			baseURL: 'http://localhost:3000',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const authorizationData = AuthorizationHelper.getAuthorizationData();
		if (authorizationData && authorizationData.token) {
			this.api.defaults.headers.common['Authorization'] = `Bearer ${authorizationData.token}`;
		}
	}

	async create(data) {
		return await this.api.post(`${this.basePath}/Create`, data);
	}

	async get(data) {
		return await this.api.get(`${this.basePath}/Get`, data);
	}

	async update(data) {
		return await this.api.put(`${this.basePath}/Update`, data);
	}

	async remove(data) {
		return await this.api.delete(`${this.basePath}/Remove`, { params: { id: data.id } });
	}
}

export default BaseService;