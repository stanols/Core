import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import loginActions from '../../actions/reducerActions/loginActions';
import UserService from "../../services/userService";

export function* loginSaga() {
	const userService = new UserService();

	yield [
		takeLatest(actions.USER_LOGIN, async function* loginUser(action) {
			try {
				const data = await userService.authenticate(action.data);

				yield put({
					type: loginActions.AUTHENTICATE_USER_SUCCESS,
					data: data
				});
			} catch (ex) {
				yield put({
					type: loginActions.AUTHENTICATE_USER_FAILURE,
					data: { error: 'Authentication failed' }
				});
			}
		})
	];
}