import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions/actions';
import Adventures from './adventures';

const mapStateToProps = (state, ownProps) => {
	const { homeReducer, loginReducer } = state;
	const { adventures } = homeReducer;
	const { authorizationData } = loginReducer;

	return {
		adventures: adventures || [],
		authorizationData: authorizationData || null
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCreate: data => {
			dispatch({
				type: actions.CREATE_ADVENTURE,
				data
			});
		},
		onGetAll: () => {
			dispatch({
				type: actions.GET_ALL_ADVENTURES
			});
		},
		onUpdate: data => {
			dispatch({
				type: actions.UPDATE_ADVENTURE,
				data
			});
		},
		onRemove: data => {
			dispatch({
				type: actions.DELETE_ADVENTURE,
				data
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);