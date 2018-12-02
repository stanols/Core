import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { registrationSaga } from './pageSagas/registrationSaga';
import { loginSaga } from './pageSagas/loginSaga';

export function* appSaga() {
	yield all([
		registrationSaga(),
		loginSaga()
	]);
}