import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthorizationHelper from 'app/helpers/authorizationHelper';
import './header.less';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
	}

	onLogout(event) {
		const { history, onLogout } = this.props;
		const data = { history };
		onLogout(data);
	}

	renderLoginPanel() {
		const isAuthorized = AuthorizationHelper.isAuthorized();

		if (isAuthorized) {
			const { authorizationData } = this.props;

			return (
				<Nav pullRight={true}>
					{authorizationData &&
						<NavItem>Hello, {authorizationData.firstName}!</NavItem>
					}
					<NavItem onClick={this.onLogout}>Logout</NavItem>
				</Nav>
			);
		}

		return (
			<Nav pullRight={true}>
				<LinkContainer to="/registration" replace>
					<NavItem>Registration</NavItem>
				</LinkContainer>
				<LinkContainer to="/login" replace>
					<NavItem>Login</NavItem>
				</LinkContainer>
			</Nav>
		);
	}

	render() {
		const authorizationPanel = this.renderLoginPanel();

		return (
			<div className="header">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/home" replace>
								Home
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav>
							<LinkContainer to="/summary" replace>
								<NavItem >Summary</NavItem>
							</LinkContainer>
						</Nav>

						{authorizationPanel}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;