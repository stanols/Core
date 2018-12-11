import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './header.less';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">
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

					<Nav pullRight={true}>
						<LinkContainer to="/registration" >
							<NavItem>Registration</NavItem>
						</LinkContainer>
						<LinkContainer to="/login" >
							<NavItem>Login</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;