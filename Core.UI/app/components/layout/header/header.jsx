import React from 'react';
import { Link } from 'react-router-dom';
import './header.less'

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Link to="/" >Home</Link>
				<Link to="/registration" >Registration</Link>
				<Link to="/login" >Login</Link>
			</div>
		);
	}
}

export default Header;