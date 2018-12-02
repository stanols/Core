import React from 'react';
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

	onSignIn(event) {
		this.props.onSignIn(this.state);
	}

	render() {
		return (
			<div>
				<h3>Sign In</h3>
				<form onSubmit={this.onSignIn}>
					<input name="name" value={this.state.name} onChange={this.onChange} type="text" placeholder="Login" />
					<input name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="Password" />
					<input type="submit" value="Sign In" />
				</form>
			</div>
		);
	}
}

export default Login;