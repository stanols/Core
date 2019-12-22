import React from 'react';
import Experience from './experience/experience';
import './experiences.less';

class Experiences extends React.Component {
	constructor(props) {
		super(props);
	}

	renderEvents() {

	}

	render() {
		return (
			<div className={"experiences"}>
				<div className={"title"}>
					<h3>Experiences</h3>
				</div>
			</div>
		);
	}
}

export default Experiences;