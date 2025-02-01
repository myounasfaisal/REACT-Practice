import React from 'react'
import { usePostContextProvider } from '../../contexts/PostContextProvider'

function PostContent() {
    const post=usePostContextProvider();
  return (
    <div>{post.Content}</div>
  )
}

export default PostContent