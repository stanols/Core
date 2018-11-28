import actions from '../../actions/actions';

export function registrationReducer(state = {}, action) {
	switch (action.type) {
		case actions.USER_CREATE:
			var { data } = action;
			return Object.assign({}, state, { newUser: data });
		default:
			return state;
	}
}