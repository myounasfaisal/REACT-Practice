import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostContextProvider from './contexts/PostContextProvider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FullPost from './pages/FullPost.jsx'
import WithOutAuthor from './pages/WithOutAuthor.jsx'

const post={
  Title:"Hello",
  Content:"Learning Comppound Components",
  Author:"M.Younas Faisal"
}

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"noauthor",
        element:<WithOutAuthor post={post}/>
      },
      {
        path:"/",
        element:<FullPost post={post}/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
