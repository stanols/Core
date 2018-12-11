import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import Login from './Login';

const mapStateToProps = (state, ownProps) => {
	return {
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSignIn: (data) => {
			return dispatch({
				type: actions.USER_LOGIN,
				data: data
			});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);