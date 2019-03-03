import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import homeActions from '../../actions/reducerActions/homeActions';
import AdventureService from "../../services/adventureService";

export function* homeSaga(dispatch) {
	const adventureService = new AdventureService();

	yield all([
		takeLatest(actions.GET_ALL_ADVENTURES, async () => {
			try {
				const data = await adventureService.getAll();

				dispatch({ type: homeActions.GET_ALL_ADVENTURES_SUCCESS, data});
			} catch (error) {
				dispatch({ type: homeActions.GET_ALL_ADVENTURES_FAILURE, error });
			}
		})
	]);
}