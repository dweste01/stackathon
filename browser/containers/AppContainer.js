import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import MyApp from './AppComponent'
import {toggleDeliveryAction, selectRestaurant,
	    yelpRestaurantReviews, setYelpRating,
		setMinPrice, setMaxPrice} from '../action-creators'

const mapStateToProps = (state) => {
	return {
		delivery: state.delivery,
		selectedRestaurant: state.selectedRes,
		yelpInfo: state.yelpInfo,
		yelpRating: state.yelpRating,
		minPrice: state.minPrice,
		maxPrice: state.maxPrice
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
		},
		toggleMinPrice: (price) => {
			dispatch(setMinPrice(price));
		},
		toggleMaxPrice: (price) => {
			dispatch(setMaxPrice(price));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)










