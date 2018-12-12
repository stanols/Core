import React from 'react';
import './adventure.less';

class Adventure extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: "",
			creactedBy: "",
			startsOn: null,
			endsOn: null,
			events: [],
			participants: []
		};
	}

	onAddEvent() {

	}

	onSave() {

	}

	render() {
		return (
			<div>
				Adventure
			</div>
		);
	}
}

export default Adventure;