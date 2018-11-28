import React from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Home from './pages/home/home';
import Registration from './pages/registration/registration';
import Login from './pages/login/login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.less';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
					<Router>
						<Route path="/" component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/registration" component={Registration} />
						<Route path="/login" component={Login} />
					</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
