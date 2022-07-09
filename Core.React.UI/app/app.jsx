import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/layout/header/headerContainer';
import FooterContainer from './pages/layout/footer/footerContainer';
import LoginContainer from './pages/login/loginContainer';
import HomeContainer from './pages/home/homeContainer';
import RegistrationContainer from './pages/registration/registrationContainer';
import SummaryContainer from './pages/summary/summaryContainer';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';

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
		const routes = this.getRoutes();
		const routeComponents = routes.map((item, index) => {
			if (item.private) {
				const element = (
					<div className="content">
						<HeaderContainer />
						{item.element}
						<FooterContainer />
					</div>
				);

				return (
					<Route exact={item.exact} key={index} path={item.path} element={element} />
				);
			}

			return (
				<Route exact={item.exact} key={index} path={item.path} element={item.element} />
			);
		});

		return (
			<Container>
				<Router>
					<Routes>
						{routeComponents}
					</Routes>
				</Router>
			</Container>
		);
	}
}
