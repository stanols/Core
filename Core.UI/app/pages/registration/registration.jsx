import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './registration.less';

class Registration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmedPassword: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSignUp = this.onSignUp.bind(this);
	}

	componentDidUpdate() {
		const { history, isUserCreated } = this.props;
		if (isUserCreated) {
			history.push("/login");
		}
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

	onSignUp(event) {
		event.preventDefault();
		const { onSignUp } = this.props;
		onSignUp(this.state);
	}

	render() {
		return (
			<div className="registration">
				<h3>Sign Up</h3>
				<form onSubmit={this.onSignUp}>
					<FormGroup>
						<ControlLabel>Name</ControlLabel>
						<FormControl name="name" value={this.state.name} onChange={this.onChange} type="text" placeholder="Login" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>First Name</ControlLabel>
						<FormControl name="firstName" value={this.state.firstName} onChange={this.onChange} type="text" placeholder="First Name" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Last Name</ControlLabel>
						<FormControl name="lastName" value={this.state.lastName} onChange={this.onChange} type="text" placeholder="Last Name" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Email</ControlLabel>
						<FormControl name="email" value={this.state.email} onChange={this.onChange} type="text" placeholder="Email" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Password</ControlLabel>
						<FormControl name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Confirm Password</ControlLabel>
						<FormControl name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.onChange} type="password" placeholder="Confirm Password" />
					</FormGroup>
					<FormControl type="submit" value="Sign Up" className={"btn btn-primary btn-sm"} />
				</form>
			</div>
		);
	}
}

export default Registration;