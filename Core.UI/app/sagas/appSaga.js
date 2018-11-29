import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { registrationSaga } from './pageSagas/registrationSaga';

export function* appSaga() {
	yield all([
		registrationSaga()
    ]);
}