import { useContext } from "react";
import { createContext } from "react";

const PostContext=createContext({});

import React from 'react'

function PostContextProvider({post,children}) {
  
  return (
    <PostContext.Provider value={post}>
        {children}
    </PostContext.Provider>
      )
}

export const usePostContextProvider=()=>{

  return useContext(PostContext);
}

export default PostContextProvider