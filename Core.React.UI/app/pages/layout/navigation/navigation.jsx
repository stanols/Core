import React from 'react';
import { TabContainer, TabContent, TabPane, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import './navigation.less';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		const { items, active } = this.props;

		this.state = {
			items: items,
			active: active
		};

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(name) {
		const active = _.find(this.state.items, item => item.name === name);
		this.setState({
			active: active
		});
	}

	render() {
		const { items, active } = this.state;
		const { name, component } = active;
		const navigationItems = items.map((item, index) =>
			<NavItem key={index}>
				<NavLink eventKey={item.name} as="div">
					<FontAwesomeIcon icon={item.icon} /> {item.title}
				</NavLink>
			</NavItem>
		);

		return (
			<TabContainer id="left-tabs" defaultActiveKey={name} onSelect={this.onSelect}>
				<Row className="clearfix">
					<Col sm={3}>
						<Nav variant="pills" className="flex-column" stacked={"true"}>
							{navigationItems}
						</Nav>
					</Col>
					<Col sm={9}>
						<TabContent animation={"true"}>
							<TabPane eventKey={name}>
								{component}
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</TabContainer>
		);
	}
}
