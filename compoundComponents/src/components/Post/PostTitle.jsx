import React from 'react'
import { usePostContextProvider } from '../../contexts/PostContextProvider'

function PostTitle() {
    const post=usePostContextProvider();

  return (
    <div>{post.Title}</div>
  )
}

export default PostTitle