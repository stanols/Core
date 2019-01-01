import React from 'react';
import LoginContainer from './pages/login/loginContainer';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import HomeContainer from './pages/home/homeContainer';
import RegistrationContainer from './pages/registration/registrationContainer';
import SummaryContainer from './pages/summary/summaryContainer';
import { Grid } from 'react-bootstrap';
import PrivateRoute from './components/layout/navigation/privateRoute/privateRoute';
import '../styles/bootstrap/bootstrap.less';
import './app.less';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
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
