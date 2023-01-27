import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetchingTwo = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState()

  useEffect(()=>{
    setLoading(true)
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then((response)=> {
      console.log(response);
      setLoading(false)
      setPost(response.data)
      setError('')
    }).catch((err)=>{
       setLoading(false)
       setError(err)
       setPost({})
     })
  }, [])
  return (
    <div>
      {loading && 'Loading...'}
      {post && post.id}
      {error && error? error: null}
    </div>
  )
}

export default DataFetchingTwo