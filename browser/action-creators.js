// import axios from "axios";
// import '../secrets'

export const TOGGLE_DELIVERY = "TOGGLE_DELIVERY"
export const SELECT_RESTAURANT = "SELECT_RESTAURANT"
export const YELP_INFO = "YELP_INFO"
export const YELP_RATING = "YELP_RATING"

export const toggleDeliveryAction = delivery => ({
	type: TOGGLE_DELIVERY,
	delivery
})

export const selectRestaurant = selectedRes => ({
	type: SELECT_RESTAURANT,
	selectedRes
})

export const yelpRestaurantReviews = yelpInfo => ({
	type: YELP_INFO,
	yelpInfo
})

export const setYelpRating = yelpRating => ({
	type: YELP_RATING,
	yelpRating
})