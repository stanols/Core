import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import Home from './home';

const mapStateToProps = (state, ownProps) => {
	return {
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);