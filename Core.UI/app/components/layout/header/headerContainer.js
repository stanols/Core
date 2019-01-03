import React from 'react';
import { connect } from 'react-redux';
import actions from 'app/actions/actions';
import Header from './header';
import authorizationHelper from 'app/helpers/authorizationHelper';

const mapStateToProps = (state, ownProps) => {
	const authorizationData = authorizationHelper.getAuthorizationData();
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);