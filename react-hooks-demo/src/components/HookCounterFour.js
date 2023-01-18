import React, { useState } from 'react'

const HookCounterFour = () => {
  const initialItem = []
  const [items, setItems] = useState(initialItem)

  const addItem=()=>{
    setItems(items.concat({
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }))
  }
  return (
    <div> 
      <button onClick={addItem}>Add a number</button>
      <button onClick={()=>setItems(initialItem)}>Reset</button>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour