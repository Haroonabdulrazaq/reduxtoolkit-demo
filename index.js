const redux = require('redux')
const produce = require('immer').produce

const combineReducers = redux.combineReducers
const bindActionCreatores = redux.bindActionCreators


// action.js
 const CAKE_ORDERED = 'CAKE_ORDERED'
const RESTOCK_CAKE = 'RESTOSK_CAKE'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const RESTOCK_ICECREAM = 'RESTOSK_ICECREAM'

 const orderCake =()=>{
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }
}

const restockCake = (payload)=>{
  return {
    type: RESTOCK_CAKE,
    payload
  }
}


const orderIceCream = (payload = 1) =>{
  return {
    type: ICECREAM_ORDERED,
    payload
  }
}

const restockIceCream = (payload = 1)=>{
  return {
    type: RESTOCK_ICECREAM,
    payload
  }
}

// state
const createStore = redux.legacy_createStore;

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

//Reducer.js
const cakeReducer = (state=initialCakeState, action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
      return produce(state, (draft)=>{
        draft.numOfCakes -= 1
      })
      case RESTOCK_CAKE:
      return produce(state, (draft)=>{
        draft.numOfCakes += action.payload
      })
    default:
      return state
  }
}

const iceCreamReducer = (state=initialIceCreamState, action) =>{
  switch (action.type) {
    case ICECREAM_ORDERED:
      return produce(state, (draft)=>{
        draft.numOfIceCreams -= 1
      })
    case RESTOCK_ICECREAM:
      return produce(state, (draft)=>{
        draft.numOfIceCreams += action.payload
      })
    default:
      return state
  }
}


//combine all reducer into One

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})




// Store
const store = createStore(rootReducer)

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=> 
  console.log('Update store', store.getState())
)

const actions = bindActionCreatores({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(10)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(3)

unsubscribe();