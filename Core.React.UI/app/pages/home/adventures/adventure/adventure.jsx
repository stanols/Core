import React from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import _ from 'lodash';
import './adventure.less';

export default class Adventure extends React.Component {
	constructor(props) {
		super(props);

		const {
			id,
			name,
			description,
			createBy,
			createdById,
			startsOn,
			endsOn
		} = this.props;

		this.state = {
			id: id || null,
			name: name || "",
			description: description || "",
			createdBy: createBy || null,
			createdById: createdById || null,
			startsOn: startsOn || new Date(),
			endsOn: endsOn || new Date()
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		const checkboxTargetType = "checkbox";
		const dateTargetType = "date";
		const target = event.target;

		let value = null;

		switch(target.type)
		{
			case checkboxTargetType:
				value = target.checked;
				break;
			case dateTargetType:
				value = target.value;
				break;
			default: 
				value = target.value;
		}

		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if(!_.isEqual(prevState, this.state)) {
			this.props.onChanged(this.state);
		}
	}

	render() {
		const { name, description, startsOn, endsOn } = this.state;
		const startsOnDate = new Date(startsOn.toString());
		const endsOnDate = new Date(endsOn.toString());

		return (
			<Form id="adventureForm">
				<FormGroup>
					<FormLabel>Name</FormLabel>
					<FormControl
						name="name"
						value={name}
						onChange={this.onChange}
						type={"text"}
						placeholder={"Name"}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel>Description</FormLabel>
					<textarea
						rows="3"
						name="description"
						value={description}
						onChange={this.onChange}
						placeholder={"Description"}
						className={"form-control"}
					>
					</textarea>
				</FormGroup>
				<FormGroup>
					<FormLabel>Starts On</FormLabel>
					<DateTimePicker
						className={"form-control"}
						name={"startsOn"}
						value={startsOnDate}
						onChange={(date) =>
							this.onChange({
								target: {
									type: "date",
									name: "startsOn",
									value: date
								}
							})
						}
					></DateTimePicker>
				</FormGroup>
				<FormGroup>
					<FormLabel>Ends On</FormLabel>
					<DateTimePicker
						className={"form-control"}
						name="endsOn"
						value={endsOnDate}
						onChange={(date) =>
							this.onChange({
								target: {
									type: "date",
									name: "endsOn",
									value: date
								}
							})
						}
					></DateTimePicker>
				</FormGroup>
			</Form>
		);
	}
}