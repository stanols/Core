import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import Navigation from '../../components/layout/navigation/navigation';
import Adventures from '../../components/adventures/adventures';
import Events from '../../components/events/events';
import './home.less';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navigationItems: [
				{
					name: "adventures",
					title: "Adventures",
					icon: "th-list",
					component: <Adventures />
				},
				{
					name: "events",
					title: "Events",
					icon: "tasks",
					component: <Events />
				}
			]
		};
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