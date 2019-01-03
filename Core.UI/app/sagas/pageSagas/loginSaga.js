import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import loginActions from '../../actions/reducerActions/loginActions';
import UserService from "../../services/userService";
import AuthorizationHelper from 'app/helpers/authorizationHelper';

export function* loginSaga(dispatch) {
	const userService = new UserService();

	yield all([
		takeLatest(actions.USER_LOGIN, async function loginUser(action) {
			try {
				const data = await userService.authenticate(action.data);

				if (data) {
					AuthorizationHelper.setAuthorizationData(data);
				} else {
					AuthorizationHelper.removeAuthorizationData();
					throw new Error("Authentication failed");
				}

				dispatch({ type: loginActions.AUTHENTICATE_USER_SUCCESS, data });
			} catch (error) {
				dispatch({
					type: loginActions.AUTHENTICATE_USER_FAILURE,
					data: error
				});
			}
		}),
		takeLatest(actions.USER_LOGOUT, async function logoutUser(action) {
			try {
				const data = await userService.logout(action.data);

				dispatch({ type: loginActions.LOGOUT_USER_SUCCESS, data });
			} catch (error) {
				dispatch({ type: loginActions.LOGOUT_USER_FAILURE, error });
			}
		})
	]); 
}