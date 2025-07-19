import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { AuthorizationHelper } from "../helpers/authorization.helper";

export default class GenericBaseService<T> {
	protected api: AxiosInstance;
	protected basePath: string;

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

	getAll(params?: object): Promise<AxiosResponse<T[]>> {
		return this.api.get<T[]>(this.basePath, { params });
	}
	
	getById(id: number | string): Promise<AxiosResponse<T>> {
		return this.api.get<T>(`${this.basePath}/${id}`);
	}
	
	create(payload: Partial<T>): Promise<AxiosResponse<T>> {
		return this.api.post<T>(`${this.basePath}/Create`, payload);
	}

	update(id: number | string, payload: Partial<T>): Promise<AxiosResponse<T>> {
		return this.api.put<T>(`${this.basePath}/${id}`, payload);
	}

	delete(id: number | string): Promise<AxiosResponse<void>> {
		return this.api.delete<void>(`${this.basePath}/${id}`);
	}
}
