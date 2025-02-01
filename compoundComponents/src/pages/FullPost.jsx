import React from 'react'
import PostCard from '../components/Post/PostCard'
import PostAuthor from '../components/Post/PostAuthor'
import PostTitle from '../components/Post/PostTitle'
import PostContent from '../components/Post/PostContent'

function FullPost({post}) {
  return (
    <PostCard post={post}>
        <PostAuthor/>
        <PostTitle/>
        <PostContent/>
    </PostCard>
  )
}

export default FullPost