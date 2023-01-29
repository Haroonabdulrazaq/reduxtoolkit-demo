import React, { useContext } from 'react'
import { countContext } from '../App'
import useDocumentTitle from './useDocumentTitle'

const DocTitleTwo = () => {
  const {count, setCount} = useContext(countContext)

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Count- {count}</button>
    </div>
  )
}

export default DocTitleTwo