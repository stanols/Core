import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../actions/actions';
import AuthorizationHelper from 'app/helpers/authorizationHelper';
import Login from './login';

const LoginContainer = () => {
	const dispatch = useDispatch();
	const loginReducer = useSelector(state => state.loginReducer);
	const authorizationData = loginReducer.authorizationData || AuthorizationHelper.getAuthorizationData() || null;

	if (authorizationData != null) {
		return (<Navigate to="/home" />);
	}

	return (
		<Login
			error={loginReducer.authorizationError}
			onLogin={(data) => dispatch({ type: actions.USER_LOGIN, data })}
		/>
	);
};

export default LoginContainer;