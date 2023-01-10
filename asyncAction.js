const { default: axios } = require("axios")
const { default: produce } = require("immer")
const redux = require('redux')
const { default: thunkMiddleware } = require("redux-thunk")
const bindActionCreatores = redux.bindActionCreators
const createStore = redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware


const initialState = {
  loading: false,
  users: [],
  error: ''
}

// Types
FETCHED_USERS_REQUESTED = 'FETCHED_USERS_REQUESTED'
FETCHED_USERS_SUCCEEDED = 'FETCHED_USERS_SUCCEEDED'
FETCHED_USERS_FAILED = 'FETCHED_USERS_FAILED'

// Action Creators
const fetchUsersRequest =()=>{
  return {
    type: 'FETCHED_USERS_REQUESTED',
  }
}
const fetchUsersSuccess =(payload)=>{
  return {
    type: 'FETCHED_USERS_SUCCEEDED',
    users: payload
  }
}

const fetchUsersFailure =(payload)=>{
  return {
    type: 'FETCHED_USERS_FAILED',
    error: payload
  }
}

// Reducers
 const reducer = (state=initialState, action)=>{
  switch (action.type) {
    case FETCHED_USERS_REQUESTED:
      return produce(state,(draft)=>{
        draft.loading = true
      })
    case FETCHED_USERS_SUCCEEDED:
      return produce(state,(draft)=>{
        draft.users = action.users
        draft.loading = true
      })
    case FETCHED_USERS_FAILED:
      return produce(state,(draft)=>{
        draft.error = action.error
        draft.loading = true
      })
      default:
        return state 
  }
 }

//  Asynchrounous actions

const fetchUsers =() =>{
  return function(dispatch) {
    dispatch(fetchUsersRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        // On Success dispatch neccessary action
        const users = response.data.map( user => user.name)
        dispatch(fetchUsersSuccess(users))
      }).catch((error)=>{
        // On Error dispatch neccessary action
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


// Store
 const store = createStore(reducer, applyMiddleware(thunkMiddleware))
 console.log('Initial State', store.getState())

store.subscribe(()=>{
  console.log('Updated State', store.getState())
})

const actions = bindActionCreatores({fetchUsers, fetchUsersRequest, fetchUsersFailure, fetchUsersSuccess}, store.dispatch) 
actions.fetchUsers()
