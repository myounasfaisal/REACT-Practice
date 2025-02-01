import React from 'react'
import { usePostContextProvider } from '../../contexts/PostContextProvider'

function PostAuthor() {
    const {Author}=usePostContextProvider();

  return (
    <div>
        {Author}
    </div>
  )
}

export default PostAuthor