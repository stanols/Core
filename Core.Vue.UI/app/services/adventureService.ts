import BaseService from './baseService';

export class AdventureService extends BaseService {
	constructor(){
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

	async removeAdventure(id: number) {
		const response = await this.api.remove(`${this.basePath}/Remove/${id}`);
	}
}

export const adventureService = new AdventureService();
