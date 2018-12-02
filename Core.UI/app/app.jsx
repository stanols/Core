import React from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Home from './pages/home/home';
import RegistrationContainer from './pages/registration/registrationContainer';
import LoginContainer from './pages/login/loginContainer';
import { Switch, Route } from 'react-router-dom';
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
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/registration" exact component={RegistrationContainer} />
					<Route path="/login" exact component={LoginContainer} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
