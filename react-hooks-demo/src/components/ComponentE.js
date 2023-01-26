import React, { useContext } from 'react'
import { CounterContext } from '../App'

const ComponentE = () => {
  const {count, dispatch} = useContext(CounterContext)
  return (
    <>
    <span>ComponentE: {count}</span>
    <button onClick={()=> dispatch('increment')}>Increment</button>
    <button onClick={()=> dispatch('decrement')}>Decrement</button>
    <button onClick={()=> dispatch('reset')}>Reset</button>
   </>
  )
}

export default ComponentE