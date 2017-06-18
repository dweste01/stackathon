import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import MyApp from './AppComponent'
import {toggleDeliveryAction, selectRestaurant, yelpRestaurantReviews, setYelpRating} from '../action-creators'

const mapStateToProps = (state) => {
	return {
		delivery: state.delivery,
		selectedRestaurant: state.selectedRes,
		yelpInfo: state.yelpInfo,
		yelpRating: state.yelpRating
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDelivery: (val) => {
			dispatch(toggleDeliveryAction(val))
		},
		setSelectedRestaurant: (id) => {
			let res = {};
			axios.get(`/api/googlePlace/${id}`)
			.then(result => {
				res = result.data.result;
				dispatch(selectRestaurant(res))
			})
			.then(() => {
				let phone = res.international_phone_number;
				phone = phone.replace(/\s/g, '').replace(/-/g, '').replace(/\(/g, '').replace(/\)/g, '')
				axios.get(`/api/yelp/phone/${phone}`)
				.then(yelpInfo => {
					dispatch(setYelpRating(yelpInfo.data.rating));
					return axios.get(`/api/yelp/bizId/${yelpInfo.data.id}`)
				})
				.then(revs => {
					dispatch(yelpRestaurantReviews(revs.data))
				})
			})
			.catch(console.log);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)










