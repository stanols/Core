import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './login.less';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			password: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSignIn = this.onSignIn.bind(this);
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

	async onSignIn(event) {
		const { onSignIn, history } = this.props;
		await onSignIn(this.state);
		history.push('/home');
	}

	async validateForm() {
		const { name, password } = this.state;
		const isValid = name.length > 0 && password.length > 0;
		return isValid;
	}

	render() {
		return (
			<div className="login">
				<h3>Sign In</h3>
				<form onSubmit={this.onSignIn}>
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