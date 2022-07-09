import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import _ from 'lodash';
import './genericModal.less';

export default class GenericModal extends React.Component {
	constructor(props) {
		super(props);

		const { model } = this.props;

		this.state = {
			model: model,
			isVisible: false
		};

		this.onSave = this.onSave.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onModelChanged = this.onModelChanged.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const { isVisible } = this.props;
		
		if (isVisible !== prevProps.isVisible) {
			this.setState({
				isVisible: isVisible
			});
		}
	}

	onSave = event => {
		event.preventDefault();

		this.setState({ isVisible: false });
		this.props.onSave(this.state.model);
	};

	onClose = () => {
		this.setState({ isVisible: false });
	};

	onModelChanged = newModel => {
		this.setState({ model: newModel });
	};

	render() {
		const { title, component, model } = this.props;
		const { isVisible } = this.state;
		const BodyComponent = component;
		model.onModelChanged = this.onModelChanged;

		return (
			<div className={"generic-modal"}>
				<Modal show={isVisible} onHide={() => this.onClose()}>
					<Modal.Header>
						<Modal.Title>{title}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<BodyComponent {...model} />
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={event => this.onSave(event)} className={"btn btn-primary btn-sm"}>Save changes</Button>
						<Button onClick={() => this.onClose()} className={"btn btn-danger btn-sm"}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}