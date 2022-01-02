import React from 'react';
import { FormGroup, FormLabel, FormControl, Alert, Button } from 'react-bootstrap';
import './login.less';

export default class Login extends React.Component {
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
		this.props.onLogin(this.state);
	}

	render() {
		const { error } = this.props;
		const { name, password } = this.state;

		return (
			<div className="login">
				{error &&
					<Alert bsStyle="danger" className="error">
						{error.message}
					</Alert>
				}
				<h3>Sign In</h3>
				<form onSubmit={this.onLogin}>
					<FormGroup>
						<FormLabel>Name</FormLabel>
						<FormControl name="name" value={name} onChange={this.onChange} type="text" placeholder="Login" />
					</FormGroup>
					<FormGroup className="mt-2">
						<FormLabel>Password</FormLabel>
						<FormControl name="password" value={password} onChange={this.onChange} type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup className="mt-4">
						<FormControl type="submit" value="Sign In" className={"btn btn-primary"} />
					</FormGroup>
					<FormGroup className="mt-4">
						<Button variant="secondary" href="#/registration" className="form-control">Sign Up</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}