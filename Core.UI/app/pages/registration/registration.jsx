import React from 'react';
import './registration.less';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Registration extends React.Component
{
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
        const checkboxTargetType = 'checkbox';
        const target = event.target;
        const value = target.type === checkboxTargetType
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {

    }

	render() {
		return (
            <div className="registration">
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmit}>
                    <FormControl>
                        <TextField
                            name={"name"}
                            label={"User Name"}
                            className={"registration-username"}
                            value={this.state.name}
                            onChange={this.onChange}
                            margin={"normal"}
                            placeholder={"User Name"}
                        />
                    </FormControl>
                        <TextField
                            name={"firstName"}
                            label={"First Name"}
                            className={"registration-firstname"}
                            value={this.state.firstName}
                            onChange={this.onChange}
                            margin={"normal"}
                            placeholder={"First Name"}
                        />
                    <FormControl>
                        <TextField
                            name={"lastName"}
                            label={"Last Name"}
                            className={"registration-lastname"}
                            value={this.state.lastName}
                            onChange={this.onChange}
                            margin={"normal"}
                            placeholder={"Last Name"}
                        />
                    </FormControl>
                        <TextField
                            name={"email"}
                            label={"Email"}
                            className={"registration-email"}
                            value={this.state.email}
                            onChange={this.onChange}
                            margin={"normal"}
                            placeholder={"Email"}
                        />
                    <FormControl>
                        <TextField
                            type={"password"}
                            name={"password"}
                            label={"Password"}
                            className={"registration-password"}
                            value={this.state.password}
                            onChange={this.onChange}
                            margin={"normal"}
                            placeholder={"Password"}
                        />
                    </FormControl>
                        <TextField
                            type={"password"}
                            name={"confirmedPassword"}
                            label={"Confirm Password"}
                            className={"registration-confirmedpassword"}
                            value={this.state.confirmedPassword}
                            onChange={this.onChange}
                            margin={"normal"}
                            placeholder={"Confirm Password"}
                        />
                    <FormControl>
                        <Button
                            type={"submit"}
                            variant={"contained"}
                            color={"primary"}
                        >
                            Sign Up
                        </Button>
                    </FormControl>
				</form>
			</div>
		);
	}
}

export default Registration;