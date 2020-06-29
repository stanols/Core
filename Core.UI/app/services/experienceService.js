import BaseService from './baseService';

class ExperienceService extends BaseService {
	constructor() {
		super('Experience');
	}

	async getAll() {
		const response = await this.api.get(`${this.basePath}/GetAll`);
		const { data } = response;

		return data;
	}
}

export default ExperienceService;