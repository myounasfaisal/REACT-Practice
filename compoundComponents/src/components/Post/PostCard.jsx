import React from 'react'
import PostContextProvider from '../../contexts/PostContextProvider'

function PostCard({children,post}) {
  return (
    <PostContextProvider post={post}>
    {children}
    </PostContextProvider>
  )
}

export default PostCard