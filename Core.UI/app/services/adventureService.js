import BaseService from './baseService';

class AdventureService extends BaseService {
	constructor() {
		super('Adventure');
	}

	async getAll() {
		const response = await this.api.get(`${this.basePath}/GetAll`);
		const { data } = response;

		return data;
	}
}

export default AdventureService;