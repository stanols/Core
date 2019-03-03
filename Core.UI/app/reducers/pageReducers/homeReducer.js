import homeActions from '../../actions/reducerActions/homeActions';

export function homeReducer(state = {}, action) {
	switch (action.type) {
		case homeActions.GET_ALL_ADVENTURES_SUCCESS:
			return Object.assign({}, state,
				{
					adventures: action.data,
					error: null
				});
		case homeActions.GET_ALL_ADVENTURES_FAILURE:
			return Object.assign({}, state,
				{
					adventures: [],
					error: action.error
				});
		default:
			return state;
	}
}