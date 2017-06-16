import { TOGGLE_DELIVERY, SELECT_RESTAURANT } from '../action-creators'


const initialState = {
	delivery: false
}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {

  	case TOGGLE_DELIVERY:
  		newState.delivery = action.delivery;
  		break;
    case SELECT_RESTAURANT:
      console.log('selecting restaurant...')
      newState.selectedRestaurant = action.selectedRestaurant;
      break;
    default:
      return state;
  }
  return newState;

}
