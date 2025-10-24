import axios from 'axios';
import { AuthorizationHelper } from "../helpers/authorization.helper";

export default class BaseService {
	api: any;
	basePath: string;

	constructor(path: string) {
		this.basePath = `/api/${path}`;
		this.api = axios.create({
			baseURL: 'https://localhost:8081',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const authorizationData = AuthorizationHelper.getAuthorizationData();
		if (authorizationData && authorizationData.token) {
			this.api.defaults.headers.common['Authorization'] = `Bearer ${authorizationData.token}`;
		}
	}

	async create(data: any) {
		return await this.api.post(`${this.basePath}/Create`, data);
	}

	async get(id: number) {
		const response = await this.api.get(`${this.basePath}/Get`, { params: { id: id } });
		return response.data;
	}

	async update(data: any) {
		return await this.api.put(`${this.basePath}/Update`, data);
	}

	async remove(data: any) {
		return await this.api.delete(`${this.basePath}/Remove`, { params: { id: data.id } });
	}
}