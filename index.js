const redux = require('redux')


// action.js
 const CAKE_ORDERED = 'CAKE_ORDERED'
const RESTOCK_CAKE = 'RESTOCK_CAKE'

 const orderCake =()=>{
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }
}

const restock = (payload)=>{
  return {
    type: RESTOCK_CAKE,
    payload
  }
}

// state
const createStore = redux.legacy_createStore;

const initialState = {
  numOfCakes: 10, 
}

//Reducer.js
const reducer = (state=initialState, action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      } 
      case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
    default:
      return state
  }
}

// Store

const store = createStore(reducer)

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=> 
  console.log('Update store', store.getState())
)

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restock(10))

unsubscribe();