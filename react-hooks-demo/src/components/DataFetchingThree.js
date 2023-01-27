import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState={
  loading: false,
  post: {},
  error: '',
}
// const fetchUser = (payload)=>{
//   return {
//     type: 'FETCH_USER',
//     payload
//   }
// }
// const fetchUserSuccess = (payload)=>{
//   return {
//     type: 'FETCH_USER_SUCCESS ',
//     payload
//   }
// }
// const fetchUserFailure = (payload)=>{
//   return {
//     type: 'FETCH_USER_FAILURE',
//     payload
//   }
// }

const reducer =(state, action) =>{
  switch (action.type) {
    case 'FETCH_USER':
      return {
        loading: action.payload,
      }
    case 'FETCH_USER_SUCCESS':
    return {
      loading: false,
      post: action.payload,
    }
    case 'FETCH_USER_FAILURE':
    return {
      loading: false,
      error: 'something went wrong',
    }
    default:
      return state
  }
}
const DataFetchingThree = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(()=>{
    dispatch({type: 'FETCH_USER', payload: true})
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=> {
      console.log(response.data);
      dispatch({type: 'FETCH_USER', payload: false})
      dispatch({type: 'FETCH_USER_SUCCESS', payload: response.data})
    }).catch((err)=>{
      dispatch({type: 'FETCH_USER', payload: false})
      dispatch({type: 'FETCH_USER_FAILURE', payload:err })
    })
  }, [])
  
  return (
    <div>
     <div>
      {state.loading && 'Loading...'}
      {state.post && state.post.title}
      {state.error && state.error}
    </div>
    </div>
  )
}

export default DataFetchingThree