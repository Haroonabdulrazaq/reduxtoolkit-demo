import { CAKE_ORDERED } from './action'

const initialState = {
  numOfCake: 10
}

const reducer = (state=initialState, action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCake: state.numOfCake - 1
      }
  
    default:
      return state
  }

}

 export default reducer;