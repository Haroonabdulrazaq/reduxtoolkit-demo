import React, {useReducer} from 'react'
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CounterContext = React.createContext()


const initialState = 0

const reducer =(state, action)=>{
switch (action) {
  case 'increment':
    return state + 1
  case 'decrement':
    return state - 1
  case 'reset':
    return initialState
  default:
    return state
}}


const  App= ()=>  {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider value={{
      count,
      dispatch
    }}>
      <div className="App">
       <div>UniversaL value: {count}</div> 
      <ComponentA />
      <ComponentB />
      <ComponentC />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
