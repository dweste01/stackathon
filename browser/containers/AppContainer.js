import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}


class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return(
			<div>hey hi hello
			</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)