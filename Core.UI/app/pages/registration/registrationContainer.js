import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import Registration from './registration';

const mapStateToProps = (state, ownProps) => {
	return {
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSignUp: (data) => {
			return dispatch({
				type: actions.USER_CREATE,
				data: data
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);