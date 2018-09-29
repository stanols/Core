import React from 'react';
import './registration.less';


class Registration extends React.Component
{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<form>
					<input type="text" value="hello" />
					<input type="password" value="password"/>
					<input type="password" value="confirmedPassword"/>
					<input type="button" value="submit" />
				</form>
			</div>
		);
	}
}

export default Registration;