# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

UseEffect with an empty array as the second parameter mimick componentDidMount.
UseEffect with an array as the second parameter mimick compnentDidUpdate with a conditional rendering-- It will run once, if the array is empty, and run many times as the variable in the array changes.
UseEffect without the second parameter mimicks ComponentDidMount and componentDidUpdate-- Because it will run everytime our component re-render
UseEffect can mimick componentWillUnmount by using a return cleanup function.

<code>
useEffect(()=>{
  //..side effect code here
 
  return ()=>{
  ..remove/unmount sideEffect here
  }
},[])
</code>

# in Component folder

ComponentA, ComponentB, ComponentC, ComponentD, ComponentE, ComponentF demonstrate using useReducer
and useContext to manage state in an Application
