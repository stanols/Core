import actions from '../../actions/actions';
import loginActions from '../../actions/reducerActions/loginActions';

export function loginReducer(state = {}, action) {
	switch (action.type) {
		case loginActions.AUTHENTICATE_USER_SUCCESS:
		{
			const { token } = action.data;
			return Object.assign({}, state, { "authorizationData": data });
		}
		case loginActions.AUTHENTICATE_USER_FAILURE:
			return Object.assign({}, state, { "authorizationData": data });
		default:
			return state;
	}
}