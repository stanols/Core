import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthorizationHelper from 'app/helpers/authorizationHelper';

class PrivateRoute extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const isAuthorized = AuthorizationHelper.isAuthorized();

		if (isAuthorized) {
			const props = this.props;
			return <Route {...props} />;
		}

		return <Redirect to="/login"/>;
	}
}

export default PrivateRoute;