import React from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Home from './pages/home/home';
import Registration from './pages/registration/registration';
import Login from './pages/login/login';
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
					<Route path="/registration" exact component={Registration} />
					<Route path="/login" exact component={Login} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
