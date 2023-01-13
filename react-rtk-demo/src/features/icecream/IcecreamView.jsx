import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const dispatch = useDispatch()
  const numOfIceCream = useSelector((state)=> state.icecream.numOfIceCream)
  return (
    <div>
      <h2>Number of IceCream - {numOfIceCream}</h2>
      <button onClick={()=> dispatch(ordered())}>Order IceCream</button>
      <input type="number" value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={()=>dispatch(restocked(parseInt(value)))}>Restock IceCreams</button>
    </div>
  )
}

export default IcecreamView