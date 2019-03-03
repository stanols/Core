import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import Navigation from '../../components/layout/navigation/navigation';
import Adventures from '../../components/adventures/adventures';
import Experiences from '../../components/experiences/experiences';
import './home.less';

class Home extends React.Component {
	constructor(props) {
		super(props);

		const { adventures } = props;

		this.getNavigationItems = this.getNavigationItems.bind(this);

		const data = {
			adventures
		};

		this.state = {
			navigationItems: this.getNavigationItems(data)
		};
	}

	getNavigationItems(data) {
		const { adventures } = data;

		return [
			{
				name: "adventures",
				title: "Adventures",
				icon: "th-list",
				component: <Adventures adventures={adventures}/>
			},
			{
				name: "experiences",
				title: "Experiences",
				icon: "tasks",
				component: <Experiences/>
			}
		];
	}

	componentWillReceiveProps(nextProps) {
		const { adventures } = nextProps;
		const data = { adventures };

		const navigationItems = this.getNavigationItems(data);

		this.setState({
			navigationItems: navigationItems
		});
	}

	componentWillMount() {
		const { onGetAllAdventures } = this.props;
		onGetAllAdventures();
	}

	render() {
		const { navigationItems } = this.state;
		const active = _.first(navigationItems);

		return (
			<div className="home">
				<Navigation
					items={navigationItems}
					active={active}
				/>
			</div>
		);
	}
}

export default Home;