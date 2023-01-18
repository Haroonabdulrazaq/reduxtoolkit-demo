import React, { useEffect, useState } from 'react'

const HookMouse = () => {
 const [x, setX] = useState(0)
 const [y, setY] = useState(0)

 const logMousePosition =(e)=>{
  console.log('MouseEvent')
  setX(e.clientX)
  setY(e.clientY)
 }

  useEffect(()=>{
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  },[])
  
  return (
    <div>
      <h2>Hooks X- {x} Y-{y} </h2>
    </div>
  )
}

export default HookMouse