import { TOGGLE_DELIVERY, SELECT_RESTAURANT, YELP_INFO, YELP_RATING} from '../action-creators'


const initialState = {
	delivery: false,
  selectedRes: {},
  yelpInfo: {},
  yelpRating: ''
}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {

  	case TOGGLE_DELIVERY:
  		newState.delivery = action.delivery;
  		break;
    case SELECT_RESTAURANT:
      newState.selectedRes = action.selectedRes;
      break;
    case YELP_INFO:
      newState.yelpInfo = action.yelpInfo;
      break;
    case YELP_RATING:
      newState.yelpRating = action.yelpRating;
      break;
    default:
      return state;
  }
  return newState;

}
