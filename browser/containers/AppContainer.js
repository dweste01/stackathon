import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import MyApp from './AppComponent'
import {toggleDeliveryAction, selectRestaurant} from '../action-creators'

const mapStateToProps = (state) => {
	return {
		delivery: state.delivery		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDelivery: (val) => {
			dispatch(toggleDeliveryAction(val))
		},
		setSelectedRestaurant: (id) => {
			axios.get(`/api/googlePlace/${id}`)
			.then(result => {
				dispatch(selectRestaurant(result.data.result))
			})
			.catch(console.log);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)










