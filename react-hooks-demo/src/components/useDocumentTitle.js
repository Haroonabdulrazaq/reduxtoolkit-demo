import { useEffect } from 'react'

const useDocumentTitle = (count) => {

  useEffect(() => {
    document.title = `Title is ${count}`
  }, [count])
  return (
    <div>

    </div>
  )
}

export default useDocumentTitle