import React, {useReducer} from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 0
}

const reducer =(state, action)=>{
  switch (action.type) {
    case 'increment':
      return {
       ...state,
       firstCounter: state.firstCounter + action.payload
      }
    case 'decrement':
      return {
        ...state,
        firstCounter: state.firstCounter - action.payload
      }
       case 'increment2':
      return {
       ...state,
       secondCounter: state.secondCounter + action.payload
      }
    case 'decrement2':
      return {
        ...state,
        secondCounter: state.secondCounter - action.payload
      }
    case 'reset':
      return initialState
    default:
      return state
  }
}
const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);

  return (
    <>
    <div>
      <div>Count - {state.firstCounter}</div>
      <div>Count - {state.secondCounter}</div>
      <button onClick={()=> dispatch({type: 'increment', payload: 1})}>Increment</button>
      <button onClick={()=> dispatch({type: 'decrement', payload: 1})}>Decrement</button>
      <button onClick={()=> dispatch({type: 'increment', payload: 5})}>Increment 5</button>
      <button onClick={()=> dispatch({type: 'decrement', payload: 5})}>Decrement 5</button>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
    <div>
       <button onClick={()=> dispatch({type: 'increment2', payload: 2})}>Increment Counter 2</button>
      <button onClick={()=> dispatch({type: 'decrement2', payload: 2})}>Decrement Counter 2</button>
    </div>
    </>
  )
}

export default CounterTwo