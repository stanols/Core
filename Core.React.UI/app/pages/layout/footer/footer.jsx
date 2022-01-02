import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './footer.less';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer fixed-bottom">
				<Container>
					<Navbar variant="dark" bg="dark">
						<Container>
							<span>&#169; Pavel Kaliukhovich</span>
						</Container>
					</Navbar>
				</Container>
			</footer>
		);
	}
}