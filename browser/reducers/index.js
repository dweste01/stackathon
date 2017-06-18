import { TOGGLE_DELIVERY, SELECT_RESTAURANT, YELP_INFO, YELP_RATING, SET_MIN_PRICE, SET_MAX_PRICE} from '../action-creators'


const initialState = {
	delivery: false,
  selectedRes: {},
  yelpInfo: {},
  yelpRating: '',
  minPrice: 1,
  maxPrice: 4,
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
    case SET_MIN_PRICE:
      newState.minPrice = action.minPrice;
      break;
    case SET_MAX_PRICE:
      newState.maxPrice = action.maxPrice;
      break;
    default:
      return state;
  }
  return newState;

}
