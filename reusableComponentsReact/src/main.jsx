import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ControlledPage from './pages/ContolledPage.jsx'
import UncontrolledPage from './pages/UncontrolledPage.jsx'

const router=createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
{
  path:"",
  element:<ControlledPage/>
},
{
  path:"uncontrolled",
  element:<UncontrolledPage/>
}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
