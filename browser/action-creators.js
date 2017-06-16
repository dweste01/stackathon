import axios from "axios";
import '../secrets'

// export const RETRIEVE_DATA = "RETRIEVE_DATA"
export const TOGGLE_DELIVERY = "TOGGLE_DELIVERY"
export const SELECT_RESTAURANT = "SELECT_RESTAURANT"

export const toggleDeliveryAction = delivery => ({
	type: TOGGLE_DELIVERY,
	delivery
})

export const selectRestaurant = selectedRestaurant => ({
	type: SELECT_RESTAURANT,
	selectedRestaurant
})

// export const getSelectedRestaurant = googleId => {
// 	return dispatch => {
// 		axios.get('/api/googlePlace/${googleId}')
// 		.then(result => {
// 			console.log('got result')
// 			res.send(result);
// 		})
// 		.catch(console.log);
// 	}
// }