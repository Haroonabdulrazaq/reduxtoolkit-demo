import React,{useEffect, useState} from 'react'

const HooksCounter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    document.title = `You clicked ${counter} times`
  })
  return (
    <div>
      <button onClick={()=> setCounter(counter + 1)}>Count {counter}</button>
    </div>
  )
}

export default HooksCounter