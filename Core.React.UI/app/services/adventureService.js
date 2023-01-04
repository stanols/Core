import BaseService from './baseService';

export default class AdventureService extends BaseService {
	constructor() {
		super('Adventure');
	}

	async getAll() {
		const response = await this.api.get(`${this.basePath}/GetAll`);
		const { data } = response;

		return data;
	}

	async getAdventuresList() {
		const response = await this.api.get(`${this.basePath}/GetAdventuresList`);
		const { data } = response;

		return data;
	}
}