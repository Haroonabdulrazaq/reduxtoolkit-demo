import React, { useEffect, useRef } from 'react'

const FocusInput = () => {

  const inputRef = useRef(null)
  const divRef = useRef(null)
  console.log(inputRef);
  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  const handleClick = ()=>{
    console.log('Hello');
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" value="test"/>
      <input type="text" ref={inputRef}/>
      <div onClick={handleClick} ref={divRef}>Alert pop up</div>
    </div>
  )
}

export default FocusInput