
export const TOGGLE_DELIVERY = "TOGGLE_DELIVERY"
export const SELECT_RESTAURANT = "SELECT_RESTAURANT"
export const YELP_INFO = "YELP_INFO"
export const YELP_RATING = "YELP_RATING"
export const SET_MIN_PRICE = "SET_MIN_PRICE"
export const SET_MAX_PRICE = "SET_MAX_PRICE"

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

export const setMinPrice = minPrice => ({
	type: SET_MIN_PRICE,
	minPrice
})

export const setMaxPrice = maxPrice => ({
	type: SET_MAX_PRICE,
	maxPrice
})