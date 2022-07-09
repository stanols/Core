import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Experience from 'app/components/experience/experience';
import GenericModal from 'app/components/common/genericModal/genericModal';
import './experiences.less';

export default class Experiences extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isPopupVisible: false,
			model: {
				id: null,
				name: ""
			}
		};

		this.onSave = this.onSave.bind(this);
		this.onEdit = this.onEdit.bind(this);
	}

	onSave = data => {
		//TODO: add onSave method
	};

	onEdit = model => {
		this.setState({
			isPopupVisible: true,
			model: model
		});
	};

	render() {
		const { model, isPopupVisible } = this.state;

		return (
			<div className={"experiences"}>
				<Row className={"experience-title"}>
					<Col>
						<h3>Experiences</h3>
						<Button
							onClick={() => this.onEdit({
								id: null,
								name: ""
							})}
							disabled={this.isPopupVisible}
							className={"btn btn-primary btn-sm"}
						>
							Create
						</Button>
					</Col>
				</Row>

				<GenericModal
					title={"Experience"}
					isVisible={isPopupVisible}
					onSave={this.onSave}
					component={Experience}
					model={model}
				/>
			</div>
		);
	}
}