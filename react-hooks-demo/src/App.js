import React  from 'react'
import './App.css';
import DataFetchingThree from './components/DataFetchingThree';
import ParentComponent from './components/ParentComponent';



const  App= ()=>  {

  return (
    <div className='App'>
      <ParentComponent/>
    </div>
  );
}

export default App;
