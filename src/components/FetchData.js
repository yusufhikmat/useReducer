import React, {useState, useEffect} from 'react'
import axios from 'axios'
const FetchData = () => {
    const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
      setIsLoading(false)
      setPost(response.data)
      setError('')
    })
    .catch((error)=>{
      setIsLoading(false)
      setPost({})
      setError('someting went wrong')
    })
  },[])
  return (
    <div>
      {isLoading ? 'loading....' : post.title}
      {error ? error : null}
    </div>
  )
}

export default FetchData
