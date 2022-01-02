import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './header.less';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
	}

	onLogout(event) {
		const { onLogout } = this.props;
		const data = {  };
		onLogout(data);
	}

	render() {
		const { authorizationData } = this.props;
		const justifyContentClassName = "justify-content-end";

		return (
			<header className="header">
				<Navbar variant="dark" collapseOnSelect="true" bg="dark">
					<Container>
						<Navbar.Brand as={Link} to="/home">
							<Nav.Item>Home</Nav.Item>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse>
							<Nav>
								<Nav.Item>
									<Nav.Link as={Link} to="/summary">
										Summary
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Navbar.Collapse>
						<Nav className={justifyContentClassName}>
							<Nav.Item>
								<Nav.Link>
									Hello, {authorizationData.firstName}!
								</Nav.Link>
							</Nav.Item>
							<Nav.Item onClick={this.onLogout}>
								<Nav.Link>
									Logout
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Container>
				</Navbar>
			</header>
		);
	}
}