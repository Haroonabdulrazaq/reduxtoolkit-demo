import React, { createContext, useEffect, useState }  from 'react'
import './App.css';
import DocsTitleOne from './components/DocsTitleOne';
import DocTitleTwo from './components/DocTitleTwo';


export const countContext = createContext()

const  App= ()=>  {
   const [count, setCount] = useState(0)
  return (
    <countContext.Provider value={{count, setCount}}>
      <div className='App'>
        <DocsTitleOne />
        <DocTitleTwo />
      </div>
    </countContext.Provider>
  );
}

export default App;
