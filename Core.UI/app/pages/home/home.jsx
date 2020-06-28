import React from 'react';
import _ from 'lodash';
import Navigation from '../../pages/layout/navigation/navigation';
import AdventuresContainer from './adventures/adventuresContainer';
import ExperiencesContainer from './experiences/experiencesContainer';
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
				icon: "th-list",
				component: <AdventuresContainer/>
			},
			{
				name: "experiences",
				title: "Experiences",
				icon: "tasks",
				component: <ExperiencesContainer/>
			}
		];
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