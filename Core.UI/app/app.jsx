import React from 'react';
import LoginContainer from './pages/login/loginContainer';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import HomeContainer from './pages/home/homeContainer';
import RegistrationContainer from './pages/registration/registrationContainer';
import SummaryContainer from './pages/summary/summaryContainer';
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
				<Switch>
					<Route path="/" exact component={HomeContainer} />
					<Route path="/home" exact component={HomeContainer} />
					<Route path="/summary" exact component={SummaryContainer} />
					<Route path="/registration" exact component={RegistrationContainer} />
					<Route path="/login" exact component={LoginContainer} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
