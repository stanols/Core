import React from 'react';
import _ from 'lodash';
import Adventure from 'app/pages/home/adventures/adventure/adventure';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import './adventures.less';

export default class Adventures extends React.Component {
	constructor(props) {
		super(props);
		const { authorizationData } = props;

		this.state = {
			authorizationData: authorizationData || null,
			isPopupVisible: false
		};

		this.onSave = this.onSave.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onModelChanged = this.onModelChanged.bind(this);

		this.props.onGetAllAdventures();
		this.props.onGetAllExperiences();
	}

	onSave = event => {
		event.preventDefault();
		this.setState({ isPopupVisible: false });
		const { authorizationData } = this.props;

		const data = this.state.model;

		if (_.isNull(data.id || null)) {
			data.createdById = authorizationData.id;

			this.props.onCreate(data);
		} else {
			this.props.onUpdate(data);
		}

		this.setState({ isPopupVisible: false });
		this.props.onGetAllAdventures();
	};

	onClose = () => {
		this.setState({ isPopupVisible: false });
	};

	onRemove = model => {
		if (_.isNull(model)) {
			return;
		}
		this.props.onRemove(model);
		this.props.onGetAllAdventures();
	};

	onCreate = () => {
		this.setState({
			isPopupVisible: true,
			model: {}
		});
	};

	onEdit = (model) => {
		this.setState({
			isPopupVisible: true,
			model: model
		});
	};

	onModelChanged = (newModel) => {
		this.setState({ model: newModel });
	};

	render() {
		const { adventures } = this.props;
		const { model, isPopupVisible } = this.state;
		const title = "Adventure";

		const adventuresList = adventures.map((adventure, index) => {
			return (
				<Row key={index} className={"adventure bg-light"}>
					<Col>
						<div>Name: {adventure.name}</div>
					</Col>
					<Col>
						<div>Description: {adventure.description}</div>
					</Col>
					<Col>
						<Button onClick={() => this.onRemove(adventure)} className={"btn btn-danger btn-sm"}>
							Remove
						</Button>
						<Button onClick={() => this.onEdit(adventure)} className={"btn btn-primary btn-sm"}>
							Edit
						</Button>
					</Col>
				</Row>
			);
		});
		
		return (
			<div className={"adventures"}>
				<Row className={"adventure-title"}>
					<Col>
						<h3>Adventures</h3>
						<Button
							onClick={() => this.onCreate()}
							disabled={this.isPopupVisible}
							className={"btn btn-primary btn-sm"}
						>
							Create
						</Button>
					</Col>
				</Row>

				{adventuresList}

				<div className={"generic-modal"}>
					<Modal show={isPopupVisible} onHide={() => this.onClose()}>
						<Modal.Header>
							<Modal.Title>{title}</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Adventure {...model} onChanged={(newModel) => this.onModelChanged(newModel)} />
						</Modal.Body>

						<Modal.Footer>
							<Button onClick={() => this.onClose()} className={"btn btn-danger btn-sm"}>Close</Button>
							<Button onClick={event => this.onSave(event)} className={"btn btn-primary btn-sm"}>Save changes</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		);
	}
}