import React from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
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

	onSelect(event) {
		const target = event.target;
		this.setState({
			active: target.value
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
			<Tab.Container id="left-tabs" defaultActiveKey={active} >
				<Row className="clearfix">
					<Col sm={3}>
						<Nav bsStyle="pills" stacked>
							{navigationItems}
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content animation>
							<Tab.Pane eventKey={active.name}>{active.component}</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		);
	}
}

export default Navigation;