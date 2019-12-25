import React from 'react';
import LoginContainer from './pages/login/loginContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import HeaderContainer from './pages/layout/header/headerContainer';
import Footer from './pages/layout/footer/footer';
import HomeContainer from './pages/home/homeContainer';
import RegistrationContainer from './pages/registration/registrationContainer';
import SummaryContainer from './pages/summary/summaryContainer';
import { Grid } from 'react-bootstrap';
import PrivateRoute from './pages/layout/navigation/privateRoute/privateRoute';
import actions from './actions/actions';
import AuthorizationHelper from './helpers/authorizationHelper';
import '../styles/bootstrap/bootstrap.less';
import '../styles/bootstrap/theme.less';
import './app.less';

class App extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		dispatch({
			type: actions.USER_RESTORE_AUTHORIZATION_DATA
		});
	}

	render() {
		const isAuthorized = AuthorizationHelper.isAuthorized();

		return (
			<div>
				<HeaderContainer />
				<div className="content">
					<Grid>
						<Switch>
							<Route path="/" exact component={LoginContainer} />
							<Route path="/login" exact component={LoginContainer} />
							<Route path="/registration" exact component={RegistrationContainer} />

							<PrivateRoute path="/home" exact component={HomeContainer} />
							<PrivateRoute path="/summary" exact component={SummaryContainer} />
						</Switch>
					</Grid>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
