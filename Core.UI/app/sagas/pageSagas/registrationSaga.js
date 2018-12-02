import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import registrationActions from '../../actions/reducerActions/registrationActions';
import UserService from "../../services/userService";

export function* registrationSaga() {
	const userService = new UserService();

	yield [
		takeLatest(actions.USER_CREATE, async function* createUser(action) {
			try {
				await userService.create(action.data);

				yield put({
					type: registrationActions.CREATE_USER_SUCCESS,
					data: {}
				});
			} catch (ex) {
				yield put({
					type: registrationActions.CREATE_USER_FAILURE,
					data: 'User is not registered'
				});
			}
		})
	];
}