import React from 'react';
import Adventure from './adventure/adventure';
import { Row, Col, Button, FormGroup, ControlLabel, FormControl, Alert, Jumbotron } from 'react-bootstrap';
import GenericModal from 'app/components/common/genericModal/genericModal';
import './adventures.less';

class Adventures extends React.Component {
	constructor(props) {
		super(props);
		const { adventures } = props;

		this.state = {
			adventures: adventures || [],
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

	componentWillReceiveProps(nextProps) {
		const { adventures } = nextProps;
		this.setState({
			adventures: adventures
		});
	}

	onSave(data) {
		if (_.isNull(data.id || null)) {
			const { authorizationData } = this.props;
			const {
				id,
				name,
				firstName,
				lastName,
				email
			} = authorizationData;

			data.createdBy = {
				id: authorizationData.id,
				name: name,
				firstName: firstName,
				lastName: lastName,
				email: email
			};

			this.props.onCreate(data);
		} else {
			this.props.onUpdate(data);
		}

		this.setState({ isPopupVisible: false });
	}

	onRemove(event) {
		this.props.onRemove(event.target);
	}

	onEdit(event) {
		this.setState({
			isPopupVisible: true
		});
	}

	renderAdventures() {
		const { adventures } = this.state;

		return adventures.map((adventure, index) => {
			return (
				<Jumbotron key={index}>
					<Row className={"adventure-info"}>
						<Col>
							<div>Name:{adventure.name}</div>
							<div>Description:{adventure.description}</div>
						</Col>
						<Col className={"controls"}>
							<Button onClick={this.OnEdit} className={"btn btn-primary btn-sm"}>Edit</Button>
							<Button onClick={this.OnRemove} className={"btn btn-danger btn-sm"}>Remove</Button>
						</Col>
					</Row>
				</Jumbotron>
			);
		});
	}

	render() {
		const adventures = this.renderAdventures();
		const { model, isPopupVisible } = this.state;

		return (
			<div className={"adventures"}>
				<Row>
					<div className={"title"}>
						<h3>Adventures</h3>
					</div>
					<div className={"controls"}>
						<Button onClick={this.onEdit} disabled={this.isPopupVisible} className={"btn btn-primary btn-sm"}>Create</Button>
						<Button onClick={this.onRemove} className={"btn btn-danger btn-sm"}>Remove</Button>
					</div>
				</Row>

				<Row>
					{adventures}
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