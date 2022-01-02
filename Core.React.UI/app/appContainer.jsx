import React from 'react';
import { useDispatch } from 'react-redux';
import actions from './actions/actions';
import App from './app';

export const AppContainer = () => {
	const dispatch = useDispatch();

	dispatch({
		type: actions.USER_RESTORE_AUTHORIZATION_DATA
	});

	return (
		<App />
	);
};
