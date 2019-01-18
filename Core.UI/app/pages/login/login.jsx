import React from 'react';
import { FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AuthorizationHelper from 'app/helpers/authorizationHelper';
import './login.less';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			password: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onLogin = this.onLogin.bind(this);
	}

	onChange(event) {
		const checkboxTargetType = "checkbox";
		const target = event.target;
		const value = target.type === checkboxTargetType
			? target.checked
			: target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	onLogin(event) {
		event.preventDefault();
		const { onLogin } = this.props;
		onLogin(this.state);
	}

	render() {
		const { authorizationData, authorizationError } = this.props;

		if (authorizationData) {
			return (
				<Redirect to="/home" />
			);
		}

		return (
			<div className="login">
				{authorizationError &&
					<Alert bsStyle="danger" className="error">
						{authorizationError.message}
					</Alert>
				}
				<h3>Sign In</h3>
				<form onSubmit={this.onLogin}>
					<FormGroup>
						<ControlLabel>Name</ControlLabel>
						<FormControl name="name" value={this.state.name} onChange={this.onChange} type="text" placeholder="Login" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Password</ControlLabel>
						<FormControl name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="Password" />
					</FormGroup>
					<FormControl type="submit" value="Sign In" className="login-button" />
				</form>
			</div>
		);
	}
}

export default Login;