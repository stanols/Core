import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import loginActions from '../../actions/reducerActions/loginActions';
import UserService from "../../services/userService";

export function* loginSaga(dispatch) {
	const userService = new UserService();

	yield all([
		takeLatest(actions.USER_LOGIN, async function loginUser(action) {
			try {
				const data = await userService.authenticate(action.data);

				dispatch({ type: loginActions.AUTHENTICATE_USER_SUCCESS, data });
			} catch (ex) {
				dispatch({
					type: loginActions.AUTHENTICATE_USER_FAILURE,
					data: { error: 'Authentication failed' }
				});
			}
		})
	]); 
}