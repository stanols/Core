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
        onDelete: data => {
            dispatch({
                type: actions.DELETE_ADVENTURE,
                data
            });
        }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);