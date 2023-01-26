import React, { useContext } from 'react'
import { CounterContext } from '../App'

const ComponentF = () => {
  const {count, dispatch} = useContext(CounterContext)
  return (
    <>
    <div>
      <span>ComponentF: {count}</span>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
    </>
  )
}

export default ComponentF