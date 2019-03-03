import React from 'react';
import Adventure from './adventure/adventure';
import './adventures.less';

class Adventures extends React.Component {
	constructor(props) {
		super(props);
		const { adventures } = props;

		this.state = {
			adventures: adventures || []
		};

		this.renderAdventures = this.renderAdventures.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { adventures } = nextProps;
		this.setState({
			adventures: adventures
		});
	}

	renderAdventures() {
		const { adventures } = this.state;

		return adventures.map(x => {
			return (
				<div>
					<span>Name:{x.name}</span>
					<span>Description:{x.description}</span>
				</div>
			);
		});
	}

	render() {
		const adventures = this.renderAdventures();

		return (
			<div>
				Adventures
				{adventures}
			</div>
		);
	}
}

export default Adventures;