import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/github/Github.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"About",
        element:<About/>
      },{
        path:"contact",
        element:< Contact/>
      },{
        path:"user/:userid",
        element:<User/>
      },{
        
          path:"github",
          element:<Github/>
        
      }

    ]
  }
])


// const router =createBrowserRouter (
//   createRoutesFromElements(
//    < Route path='/' element={<Layout/>}>
//    < Route path='' element={<Home/>}/>
//    < Route path='/about' element={<About/>}/>
//    < Route path='/contact' element={<Contact/>}/>
//     </Route>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
