import React,{useState} from 'react'

const HooksCounter = () => {
  const [counter, setCounter] = useState(0)

  // const increment=()=>{
  //   setCounter(counter + 1)
  // }
  return (
    <div>
      <button onClick={()=> setCounter(counter + 1)}>Count {counter}</button>
    </div>
  )
}

export default HooksCounter