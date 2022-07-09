export default class AuthorizationHelper {
	static isAuthorized() {
		const authorizationDataKey = "authorizationData";
		const authorizationData = sessionStorage.getItem(authorizationDataKey);
		let data = null;

		if (authorizationData) {
			data = JSON.parse(authorizationData);
		}

		if (data && data.token) {
			return true;
		}

		return false;
	}

	static setAuthorizationData(data) {
		const authorizationDataKey = "authorizationData";
		sessionStorage.setItem(authorizationDataKey, JSON.stringify(data));
	}

	static getAuthorizationData() {
		const authorizationDataKey = "authorizationData";
		const authorizationData = sessionStorage.getItem(authorizationDataKey);

		if (authorizationData) {
			return JSON.parse(authorizationData);
		}

		return null;
	}

	static removeAuthorizationData() {
		const authorizationDataKey = "authorizationData";
		sessionStorage.removeItem(authorizationDataKey);
	}
}