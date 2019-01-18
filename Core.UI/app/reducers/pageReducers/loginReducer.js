import loginActions from '../../actions/reducerActions/loginActions';

export function loginReducer(state = {}, action) {
	switch (action.type) {
		case loginActions.LOGIN_USER_SUCCESS:
			return Object.assign({}, state,
				{
					authorizationData: action.data,
					authorizationError: null
				});
		case loginActions.LOGIN_USER_FAILURE:
			return Object.assign({}, state,
				{
					authorizationData: null,
					authorizationError: action.data
				});
		case loginActions.LOGOUT_USER_SUCCESS:
			return Object.assign({}, state,
				{
					authorizationData: null,
					logoutError: null
				});
		case loginActions.LOGOUT_USER_FAILURE:
			return Object.assign({}, state,
				{
					authorizationData: null,
					logoutError: action.data
				});
		default:
			return state;
	}
}