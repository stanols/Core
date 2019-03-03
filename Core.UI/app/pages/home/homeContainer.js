import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import Home from './home';

const mapStateToProps = (state, ownProps) => {
	const { homeReducer } = state;
	const { adventures } = homeReducer;

	return {
		adventures
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onGetAllAdventures: () => {
			dispatch({
				type: actions.GET_ALL_ADVENTURES
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);