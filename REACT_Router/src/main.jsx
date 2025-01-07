import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// we can use app.js or app.jsx for outlet or create a new file as layout or root
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
const router =createBrowserRouter( [
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      }
    ]

  }
])
// Used createBrowserRouter to create a router

//Used RouterProvider to provide the router to the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
