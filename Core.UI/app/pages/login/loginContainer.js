import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../../actions/actions';
import Login from './login';
import AuthorizationHelper from 'app/helpers/authorizationHelper';

const mapStateToProps = (state, ownProps) => {
	const { loginReducer } = state;
	const { authorizationError } = loginReducer;

	return {
		authorizationData: AuthorizationHelper.getAuthorizationData(),
		authorizationError
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLogin: (data) => {
			dispatch({
				type: actions.USER_LOGIN,
				data
			});
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));