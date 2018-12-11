import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import Navigation from '../../components/layout/navigation/navigation';
import './home.less';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const navigationItems = [
			{
				name: "adventures",
				title: "Adventures",
				component: null	//TODO: add specific component here
			}
		];
		const active = _.first(navigationItems);

		return (
			<div className="home">
				<h3>Welcome to adventure app!</h3>

				<Navigation
					items={navigationItems}
					active={active}
				/>
			</div>
		);
	}
}

export default Home;