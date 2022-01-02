import _ from 'lodash';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import registrationActions from '../../actions/reducerActions/registrationActions';
import UserService from "../../services/userService";

export function* registrationSaga(dispatch) {
	yield all([
		takeLatest(actions.USER_CREATE, async (msg) => {
			try {
				const { data } = msg;
				const userService = new UserService();
				await userService.create(data);

				dispatch({
					type: registrationActions.CREATE_USER_SUCCESS,
					data: true
				});
			} catch (ex) {
				dispatch({
					type: registrationActions.CREATE_USER_FAILURE,
					data: 'User was not registered'
				});
			}
		})
	]);
}