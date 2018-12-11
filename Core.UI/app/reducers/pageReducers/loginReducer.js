import actions from '../../actions/actions';
import loginActions from '../../actions/reducerActions/loginActions';

export function loginReducer(state = {}, action) {
	switch (action.type) {
		case loginActions.AUTHENTICATE_USER_SUCCESS:
			return state;
		default:
			return state;
	}
}