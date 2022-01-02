import registrationActions from '../../actions/reducerActions/registrationActions';

export function registrationReducer(state = {}, action) {
	switch (action.type) {
		case registrationActions.CREATE_USER_SUCCESS:
			return Object.assign({}, state, { isUserCreated: action.data });
		case registrationActions.CREATE_USER_FAILURE:
			return Object.assign({}, state, { error: action.data });
		default:
			return state;
	}
}