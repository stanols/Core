import React from 'react';
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
		this.props.onSignUp(this.state);
	}

	render() {
		return (
			<div className="registration">
				<h3>Sign Up</h3>
				<form onSubmit={this.onSignUp}>
					<input name="name" value={this.state.name} onChange={this.onChange} type="text" placeholder="Login" />
					<input name="firstName" value={this.state.firstName} onChange={this.onChange} type="text" placeholder="First Name" />
					<input name="lastName" value={this.state.lastName} onChange={this.onChange} type="text" placeholder="Last Name" />
					<input name="email" value={this.state.email} onChange={this.onChange} type="text" placeholder="Email" />
					<input name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="Password" />
					<input name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.onChange} type="password" placeholder="Confirm Password" />
					<input type="submit" value="Sign Up" />
				</form>
			</div>
		);
	}
}

export default Registration;