import React from 'react'
import PostCard from '../components/Post/PostCard'
import PostContent from '../components/Post/PostContent'
import PostTitle from '../components/Post/PostTitle'

function WithOutAuthor({post}) {
  return (
    <PostCard post={post} >
      <PostTitle/>
      <PostContent/>
    </PostCard>
  )
}

export default WithOutAuthor