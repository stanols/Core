

class AuthorizationHelper {
	static isAuthorized() {
		const tokenKey = "token";
		const token = sessionStorage.getItem(tokenKey);

		if (token) {
			return true;
		}

		return false;
	}

	static setAuthorizationToken(token) {
		const tokenKey = 'token';
		sessionStorage.setItem(tokenKey, token);
	}

	static removeAuthorizationToken() {
		const tokenKey = 'token';
		sessionStorage.removeItem(tokenKey);
	}
}

export default AuthorizationHelper;