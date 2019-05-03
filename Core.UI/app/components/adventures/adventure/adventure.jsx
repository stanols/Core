import React from 'react';
import { FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import './adventure.less';

class Adventure extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			creactedBy: "",
			startsOn: null,
			endsOn: null,
			events: [],
			participants: []
		};

		this.onChange = this.onChange.bind(this);
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

		this.props.onModelChanged(this.state);
	}

	render() {
		const { name, description } = this.state;

		return (
			<div>
				<FormGroup>
					<ControlLabel>Name</ControlLabel>
					<FormControl name="name" value={name} onChange={this.onChange} type={"text"} placeholder={"Name"} />
				</FormGroup>
				<FormGroup>
					<ControlLabel>Description</ControlLabel>
					<textarea rows="3" name="description" value={description} onChange={this.onChange} placeholder={"Description"} className={"form-control"}>
					</textarea>
				</FormGroup>
				
			</div>
		);
	}
}

export default Adventure;