
const initialState = {}

export default function (state = initialState, action) {

  const newState = Object.assign({}, state)
  switch(action){
  	
    default:
      return state;

  }
  return newState;

}
