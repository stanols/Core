import React from 'react';
import './login.less';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			login: "",
			password: ""
		};

		this.onSignIn = this.onSignIn.bind(this);
	}

	onSignIn() {

	}

	render() {
		return (
			<div>
				<h3>Sign In</h3>
				<form onSubmit={this.onSignIn}>
					<input type="text" placeholder="login" />
					<input type="password" placeholder="login" />
				</form>
			</div>
		);
	}
}

export default Login;