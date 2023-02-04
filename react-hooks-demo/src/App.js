import React, { createContext, useEffect, useState }  from 'react'
import './App.css';
import UserForm from './components/UserForm';


export const countContext = createContext()

const  App= ()=>  {
   const [count, setCount] = useState(0)
  return (
    <countContext.Provider value={{count, setCount}}>
      <div className='App'>
        <UserForm />
      </div>
    </countContext.Provider>
  );
}

export default App;
