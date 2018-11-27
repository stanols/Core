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
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		//const checkboxTargetType = 'checkbox';
		//const target = event.target;
		//const value = target.type === checkboxTargetType
		//    ? target.checked
		//    : target.value;
		//const name = target.name;

		//this.setState({
		//    [name]: value
		//});
	}

	onSubmit(event) {

	}

	render() {
		return (
			<div className="registration">
				<h3>Sign Up</h3>
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="login"/>
				</form>
			</div>
		);
	}
}

export default Registration;