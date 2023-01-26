import React, {useContext} from 'react'
import { CounterContext } from '../App'

const ComponentD = () => {
  const {count, dispatch} = useContext(CounterContext)
  return (
   <>
    <span>ComponentD: {count}</span>
    <button onClick={()=> dispatch('increment')}>Increment</button>
    <button onClick={()=> dispatch('decrement')}>Decrement</button>
    <button onClick={()=> dispatch('reset')}>Reset</button>
   </>
  )
}

export default ComponentD