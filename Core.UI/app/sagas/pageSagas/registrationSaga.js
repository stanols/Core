import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';

export function* registrationSaga() {
	yield [
		takeLatest(actions.USER_CREATE, function* createUser(action) {
			try {

			} catch (ex) {

			}
		})
	];
}