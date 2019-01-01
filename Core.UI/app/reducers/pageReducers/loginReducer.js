import loginActions from '../../actions/reducerActions/loginActions';

export function loginReducer(state = {}, action) {
	switch (action.type) {
		case loginActions.AUTHENTICATE_USER_SUCCESS:
			return Object.assign({}, state,
				{
					authorizationData: action.data,
					authorizationError: null
				});
		case loginActions.AUTHENTICATE_USER_FAILURE:
			return Object.assign({}, state,
				{
					authorizationData: null,
					authorizationError: action.data
				});
		default:
			return state;
	}
}