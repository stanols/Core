import React from 'react';
import _ from 'lodash';
import Adventure from './adventure/adventure';
import { Row, Col, Button, FormGroup, ControlLabel, FormControl, Alert, Jumbotron } from 'react-bootstrap';
import GenericModal from 'app/components/common/genericModal/genericModal';
import './adventures.less';

class Adventures extends React.Component {
	constructor(props) {
		super(props);
		const { adventures, authorizationData } = props;

		this.state = {
			adventures: adventures || [],
			authorizationData: authorizationData || null,
			isPopupVisible: false,
			model: {
				id: null,
				name: "",
				description: "",
				createdBy: null,
				startsOn: new Date(),
				endsOn: new Date(),
				events: [],
				participants: []
			}
		};

		this.onSave = this.onSave.bind(this);
		this.onRemove = this.onRemove.bind(this);

		this.onEdit = this.onEdit.bind(this);

		this.renderAdventures = this.renderAdventures.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const { adventures, authorizationData } = nextProps;
		this.setState({
			adventures: adventures,
			authorizationData: authorizationData
		});
	}

	onSave = data => {
		const { authorizationData } = this.props;

		const {
			id,
			name,
			firstName,
			lastName,
			email
		} = authorizationData;

		data.createdBy = {
			id: id,
			name: name,
			firstName: firstName,
			lastName: lastName,
			email: email
		};

		if (_.isNull(data.id || null)) {
			this.props.onCreate(data);
		} else {
			this.props.onUpdate(data);
		}

		this.setState({ isPopupVisible: false });
	};

	onRemove = model => {
		if (_.isNull(model)) {
			return;
		}
		this.props.onRemove(model);
	};

	onEdit = model => {
		this.setState({
			isPopupVisible: true,
			model: model
		});
	};

	renderAdventures = adventures => {
		return adventures.map((adventure, index) => {
			return (
				<Jumbotron key={index}>
					<Row className={"adventure-info"}>
						<Col>
							<div>Name:{adventure.name}</div>
							<div>Description:{adventure.description}</div>
						</Col>
						<Col className={"controls"}>
							<Button onClick={() => this.onEdit(adventure)} className={"btn btn-primary btn-sm"}>Edit</Button>
							<Button onClick={() => this.onRemove(adventure)} className={"btn btn-danger btn-sm"}>Remove</Button>
						</Col>
					</Row>
				</Jumbotron>
			);
		}, this);
	};

	render() {
		const { adventures, model, isPopupVisible } = this.state;
		const adventuresList = this.renderAdventures(adventures);
		
		return (
			<div className={"adventures"}>
				<Row>
					<div className={"title"}>
						<h3>Adventures</h3>
					</div>
					<div className={"controls"}>
						<Button
							onClick={() => this.onEdit({
								id: null,
								name: "",
								description: "",
								createdBy: null,
								startsOn: new Date(),
								endsOn: new Date(),
								events: [],
								participants: []
							})}
							disabled={this.isPopupVisible}
							className={"btn btn-primary btn-sm"}
						>
							Create
						</Button>
					</div>
				</Row>

				<Row>
					{adventuresList}
				</Row>

				<GenericModal
					title={"Adventure"}
					isVisible={isPopupVisible}
					onSave={this.onSave}
					component={Adventure}
					model={model}
				/>
			</div>
		);
	}
}

export default Adventures;