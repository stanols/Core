import homeActions from '../../actions/reducerActions/homeActions';

export function homeReducer(state = {}, action) {
	switch (action.type) {
		case homeActions.CREATE_ADVENTURE_SUCCESS:
			return Object.assign({},
				state,
				{
					adventures: state.adventures.concat([action.data]),
					error: action.error
				});
		case homeActions.CREATE_ADVENTURE_FAILURE:
			return Object.assign({}, state,
				{
					adventures: [],
					errors: action.error
				});
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
		case homeActions.DELETE_ADVENTURE_SUCCESS:
			return Object.assign({}, state,
				{
					adventures: state.adventures.filter(x => x.id !== action.data.id),
					error: null
				});
		case homeActions.DELETE_ADVENTURE_FAILURE:
			return Object.assign({}, state,
				{
					adventures: state.adventures,
					error: action.error
				});
		default:
			return state;
	}
}