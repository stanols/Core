import loginActions from '../../actions/reducerActions/loginActions';

export function loginReducer(state = {}, action) {
	switch (action.type) {
		case loginActions.LOGIN_USER_SUCCESS:
			return Object.assign({}, state,
				{
					authorizationData: action.data
				});
		case loginActions.LOGIN_USER_FAILURE:
			return Object.assign({}, state,
				{
					error: action.data
				});
		case loginActions.LOGOUT_USER_SUCCESS:
			return Object.assign({}, state,
				{
					authorizationData: null
				});
		case loginActions.LOGOUT_USER_FAILURE:
			return Object.assign({}, state,
				{
					authorizationData: null,
					error: action.data
				});
		default:
			return state;
	}
}