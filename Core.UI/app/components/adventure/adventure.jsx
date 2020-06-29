import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import Select from "react-select";
import _ from 'lodash';
import './adventure.less';

class Adventure extends React.Component {
	constructor(props) {
		super(props);

		const {
			id,
			name,
			description,
			createBy,
			startsOn,
			endsOn,
			experiences,
			participants
		} = this.props;

		this.state = {
			id: id || null,
			name: name || "",
			description: description || "",
			createdBy: createBy || null,
			startsOn: startsOn || new Date(),
			endsOn: endsOn || new Date(),
			experiences: experiences || [],
			participants: participants || []
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
		}, () => {
			this.props.onModelChanged(this.state);
		});
	}

	render() {
		const { experienceOptions } = this.props;
		const { name, description, startsOn, endsOn, experiences } = this.state;

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
				<FormGroup>
					<ControlLabel>Starts On</ControlLabel>
					<DateTimePicker
						name="startsOn"
						value={startsOn}
						onChange={date =>
							this.onChange({
								target: {
									type: "date",
									name: "startsOn",
									value: date
								}
							})
						}
						className={"form-control"}
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Ends On</ControlLabel>
					<DateTimePicker
						name="endsOn"
						value={endsOn}
						onChange={date =>
							this.onChange({
								target: {
									type: "date",
									name: "endsOn",
									value: date
								}
							})
						}
						className={"form-control"}
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Experiences</ControlLabel>
					<Select
						isMulti={true}
						closeMenuOnSelect={false}
						options={experienceOptions.map(function(x) {
							return {
								label: x.name,
								value: x.id
							};
						})}
						value={experiences}
						onChange={selectedOptions => {
							this.onChange({
								target: {
									type: "multiSelect",
									name: "experiences",
									value: selectedOptions
								}
							});
						}}
					/>
				</FormGroup>
			</div>
		);
	}
}

export default Adventure;