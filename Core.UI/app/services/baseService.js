import axios from 'axios';

class BaseService {
	constructor(path) {
		const tokenKey = 'token';
		const token = sessionStorage.getItem(tokenKey);

		this.basePath = `/api/${path}`;
		this.api = axios.create({
			baseURL: 'http://localhost:3000',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		});
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
		return await this.api.delete(`${this.basePath}/Remove`, data);
	}
}

export default BaseService;