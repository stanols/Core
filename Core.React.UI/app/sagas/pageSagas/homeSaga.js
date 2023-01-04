import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from '../../actions/actions';
import homeActions from '../../actions/reducerActions/homeActions';
import AdventureService from "../../services/adventureService";
import ExperienceService from "../../services/experienceService";

export function* homeSaga(dispatch) {
	yield all([
		takeLatest(actions.CREATE_ADVENTURE, async (msg) => {
			try {
				const { data } = msg;
				const adventureService = new AdventureService();
				const createResult = await adventureService.create(data);
				data.id = createResult.data;

				dispatch({ type: homeActions.CREATE_ADVENTURE_SUCCESS, data: data });
			} catch (error) {
				dispatch({ type: homeActions.CREATE_ADVENTURE_FAILURE, error });
			}
		}),
		takeLatest(actions.GET_ALL_ADVENTURES, async () => {
			try {
				const adventureService = new AdventureService();
				const getResult = await adventureService.getAdventuresList();

				dispatch({ type: homeActions.GET_ALL_ADVENTURES_SUCCESS, data: getResult });
			} catch (error) {
				dispatch({ type: homeActions.GET_ALL_ADVENTURES_FAILURE, error });
			}
		}),
		takeLatest(actions.UPDATE_ADVENTURE, async (msg) => {
			try {
				const { data } = msg;
				const adventureService = new AdventureService();
				await adventureService.update(data);

				dispatch({ type: homeActions.UPDATE_ADVENTURE_SUCCESS, data: data });
			} catch (error) {
				dispatch({ type: homeActions.UPDATE_ADVENTURE_FAILURE, error });
			}
		}),
		takeLatest(actions.DELETE_ADVENTURE, async (msg) => {
			try {
				const { data } = msg;
				const adventureService = new AdventureService();
				await adventureService.remove(data);

				dispatch({ type: homeActions.DELETE_ADVENTURE_SUCCESS, data: data });
			} catch (error) {
				dispatch({ type: homeActions.DELETE_ADVENTURE_FAILURE, error });
			}
		}),
		takeLatest(actions.GET_ALL_EXPERIENCES, async () => {
			try {
				const experienceService = new ExperienceService();
				const getResult = await experienceService.getAll();

				dispatch({ type: homeActions.GET_ALL_EXPERIENCES_SUCCESS, data: getResult });
			} catch (error) {
				dispatch({ type: homeActions.GET_ALL_EXPERIENCES_FAILURE, error });
			}
		})
	]);
}