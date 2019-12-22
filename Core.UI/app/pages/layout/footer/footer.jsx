import React from 'react';
import './footer.less';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<div className="container">
					<div>&#169; Pavel Kaliukhovich</div>
					<div></div>
				</div>
			</div>
		);
	}
}

export default Footer;