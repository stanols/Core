import registrationActions from '../../actions/reducerActions/registrationActions';

export function registrationReducer(state = {}, action) {
	switch (action.type) {
		case registrationActions.CREATE_USER_SUCCESS:
			var { data } = action;
			return Object.assign({}, state, { newUser: data });
		default:
			return state;
	}
}