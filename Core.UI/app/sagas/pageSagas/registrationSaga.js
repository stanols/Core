import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import registrationActions from '../../actions/reducerActions/registrationActions';
import UserService from "../../services/userService";

export function* registrationSaga(dispatch) {
	const userService = new UserService();

	yield [
		takeLatest(actions.USER_CREATE, async function createUser(action) {
			try {
				const { data } = action;
				await userService.create(data);

				dispatch({
					type: registrationActions.CREATE_USER_SUCCESS,
					data: {}
				});
			} catch (ex) {
				dispatch({
					type: registrationActions.CREATE_USER_FAILURE,
					data: 'User is not registered'
				});
			}
		})
	];
}