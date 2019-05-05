import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from 'app/actions/actions';
import Header from './header';
import AuthorizationHelper from 'app/helpers/authorizationHelper';

const mapStateToProps = (state, ownProps) => {
	const authorizationData = AuthorizationHelper.getAuthorizationData();

	return {
		authorizationData
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLogout: (data) => {
			dispatch({
				type: actions.USER_LOGOUT,
				data
			});
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));