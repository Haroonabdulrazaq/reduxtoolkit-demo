const redux = require('redux')

const createStore = redux.createStore()

const initialState = {
  numOfCakes: 10, 
  anotherProperty: 0
}

const reducer = (state=initialState, action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }

}

const store = createStore(reducer)

console.log('Initial State', store.getState());