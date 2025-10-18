import BaseService from './baseService';

export default class ExperienceService extends BaseService {
	constructor() {
		super('Experience');
	}

	async getAll() {
		const response = await this.api.get(`${this.basePath}/GetAll`);
		const { data } = response;

		return data;
	}
}

export const experienceService = new ExperienceService();
