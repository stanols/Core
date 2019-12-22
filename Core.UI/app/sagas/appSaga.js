import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { registrationSaga } from './pageSagas/registrationSaga';
import { loginSaga } from './pageSagas/loginSaga';
import { homeSaga } from './pageSagas/homeSaga';

export function* appSaga(dispatch) {
	yield all([
		registrationSaga(dispatch),
		loginSaga(dispatch),
		homeSaga(dispatch)
	]);
}