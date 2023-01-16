import React from 'react';
import _ from 'lodash';
import Navigation from '../../pages/layout/navigation/navigation';
import AdventuresContainer from './adventures/adventuresContainer';
import ExperiencesContainer from './experiences/experiencesContainer';
import { faThList, faTasks } from '@fortawesome/free-solid-svg-icons';
import './home.less';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const navigationItems = [
			{
				name: "adventures",
				title: "Adventures",
				icon: faThList,
				component: <AdventuresContainer/>
			},
			{
				name: "experiences",
				title: "Experiences",
				icon: faTasks,
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
