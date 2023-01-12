const store = require('./app/store');
const { fetchUsers } = require('./features/user/userSlice')
// const cakeActions = require('./features/cake/cakeSlice').cakeActions
// const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions

console.log('Initial State', store.getState());


store.subscribe(()=>{
  console.log('Updated State', store.getState());
})

store.dispatch(fetchUsers())

// Cake
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(4))

//Icecream
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()