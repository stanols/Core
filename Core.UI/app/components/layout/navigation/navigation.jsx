import React from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import _ from 'lodash';
import './navigation.less';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		const { items, active } = this.props;

		this.state = {
			items: items,
			active: active
		};

		this.onSelect = this.onSelect.bind(this);
		this.renderNavPills = this.renderNavigationItems.bind(this);
	}

	onSelect(name) {
		const active = _.find(this.state.items, item => item.name === name);
		this.setState({
			active: active
		});
	}

	renderNavigationItems(items) {
		return items.map(item => 
			<NavItem key={item.name} eventKey={item.name}>{item.title}</NavItem>
		);
	}

	render() {
		const { items, active } = this.state;
		const navigationItems = this.renderNavigationItems(items);

		return (
			<Tab.Container id="left-tabs" defaultActiveKey={active} onSelect={this.onSelect}>
				<Row className="clearfix">
					<Col sm={3}>
						<Nav bsStyle="pills" stacked>
							{navigationItems}
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content animation>
							<Tab.Pane eventKey={active.name}>
								{active.component}
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		);
	}
}

export default Navigation;