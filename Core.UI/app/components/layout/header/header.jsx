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
		const { authorizationData, onLogout } = this.props;
		onLogout(authorizationData);
	}

	renderLoginPanel() {
		const isAuthorized = AuthorizationHelper.isAuthorized();

		if (isAuthorized) {
			return (
				<Nav pullRight={true}>
					<NavItem onClick={this.onLogout}>Logout</NavItem>
				</Nav>
			);
		}

		return (
			<Nav pullRight={true}>
				<LinkContainer to="/registration" >
					<NavItem>Registration</NavItem>
				</LinkContainer>
				<LinkContainer to="/login" >
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
							<Link to="/home">
								Home
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav>
							<LinkContainer to="/summary" >
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