import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './registration.less';

export default class Registration extends React.Component {
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
		const { isUserCreated, navigate } = this.props;

		if (isUserCreated) {
			navigate("/login");
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
				<div className="title">
					<h3>Sign Up</h3>
					<Link to="/login">
						<FontAwesomeIcon icon={faArrowAltCircleLeft} className="fa-2x" />
					</Link>
				</div>
				<form onSubmit={this.onSignUp}>
					<FormGroup>
						<FormLabel>Name</FormLabel>
						<FormControl name="name" value={this.state.name} onChange={this.onChange} type="text" placeholder="Login" />
					</FormGroup>
					<FormGroup className="mt-2">
						<FormLabel>First Name</FormLabel>
						<FormControl name="firstName" value={this.state.firstName} onChange={this.onChange} type="text" placeholder="First Name" />
					</FormGroup>
					<FormGroup className="mt-2">
						<FormLabel>Last Name</FormLabel>
						<FormControl name="lastName" value={this.state.lastName} onChange={this.onChange} type="text" placeholder="Last Name" />
					</FormGroup>
					<FormGroup className="mt-2">
						<FormLabel>Email</FormLabel>
						<FormControl name="email" value={this.state.email} onChange={this.onChange} type="text" placeholder="Email" />
					</FormGroup>
					<FormGroup className="mt-2">
						<FormLabel>Password</FormLabel>
						<FormControl name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup className="mt-2">
						<FormLabel>Confirm Password</FormLabel>
						<FormControl name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.onChange} type="password" placeholder="Confirm Password" />
					</FormGroup>
					<FormGroup className="mt-4">
						<FormControl type="submit" value="Sign Up" className={"btn btn-primary"} />
					</FormGroup>
				</form>
			</div>
		);
	}
}