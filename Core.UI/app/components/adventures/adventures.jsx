import React from 'react';
import Adventure from './adventure/adventure';
import { Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import GenericModal from 'app/components/common/genericModal/genericModal';
import '../../../styles/bootstrap/mixins/buttons.less';
import './adventures.less';

class Adventures extends React.Component {
	constructor(props) {
		super(props);
		const { adventures } = props;

		this.state = {
			adventures: adventures || [],
			isPopupVisible: false,
			model: {
				name: '',
				description: ''
			}
		};

		this.onRemove = this.onRemove.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onSave = this.onSave.bind(this);

		this.renderAdventures = this.renderAdventures.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { adventures } = nextProps;
		this.setState({
			adventures: adventures
		});
	}

	onRemove(event) {
	}

	onEdit(event) {
		this.setState({ isPopupVisible: true });
	}

	onSave(data) {
		this.setState({ isPopupVisible: false });
	}

	renderAdventures() {
		const { adventures } = this.state;

		return adventures.map((adventure, index) => {
			return (
				<div key={index}>
					<div>
						<span>Name:{adventure.name}</span>
						<span>Description:{adventure.description}</span>
					</div>
					<div>
						<Button onClick={this.OnEdit} className={'button-variant'}>Edit</Button>
						<Button onClick={this.OnRemove} className={'remove-button'}>Remove</Button>
					</div>
				</div>
			);
		});
	}

	render() {
		const adventures = this.renderAdventures();
		const { model, isPopupVisible } = this.state;

		return (
			<div className={"adventures"}>
				<div>
					<h3>Adventures</h3>
					<span>
						<Button onClick={this.onRemove} className={"remove-button"}>Remove</Button>
						<Button onClick={this.onEdit} disabled={this.isPopupVisible} className={"button-variant"}>Create</Button>
					</span>
				</div>

				<div>
					{adventures}
				</div>

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