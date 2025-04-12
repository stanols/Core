import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/layout/header/headerContainer';
import FooterContainer from './pages/layout/footer/footerContainer';
import LoginContainer from './pages/login/loginContainer';
import HomeContainer from './pages/home/homeContainer';
import RegistrationContainer from './pages/registration/registrationContainer';
import SummaryContainer from './pages/summary/summaryContainer';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';
import { createBrowserHistory } from 'history';

// Higher-Order Component for private routes
const PrivateRoute = ({ element }) => (
	<div className="content">
		<HeaderContainer />
		{element}
		<FooterContainer />
	</div>
);

// Factory function to create routes
const createRoutes = (routes) => {
	return routes.map((item, index) => {
		const element = item.private ? <PrivateRoute element={item.element} /> : item.element;
		return <Route exact={item.exact} key={index} path={item.path} element={element} />;
	});
};

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	getRoutes() {
		const routes = [
			{
				path: "/",
				exact: true,
				private: true,
				element: <HomeContainer />
			},
			{
				path: "/home",
				exact: true,
				private: true,
				element: <HomeContainer />
			},
			{
				path: "/summary",
				exact: true,
				private: true,
				element: <SummaryContainer />
			},
			{
				path: "/login",
				exact: true,
				private: false,
				element: <LoginContainer />
			},
			{
				path: "/registration",
				exact: true,
				private: false,
				element: <RegistrationContainer />
			}
		];

		return routes;
	}

	render() {
		const history = createBrowserHistory();
		const routes = this.getRoutes();
		const routeComponents = createRoutes(routes);

		return (
			<Container>
				<HashRouter history={history}>
					<Routes>
						{routeComponents}
					</Routes>
				</HashRouter>
			</Container>
		);
	}
}
