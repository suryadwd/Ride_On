import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Csignup from './pages/Csignup'
import Clogin from './pages/Clogin'
import Homepage from './pages/Homepage'
import Chome from './pages/Chome'
import Protection from './pages/Protection'
import ProtectionCap from './pages/ProtectionCap'
import Logout from './pages/Logout'
import Riding from './pages/Riding'


const routes = createBrowserRouter([

  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  
  {
    path:"/home",
    element: <Homepage/>
  },

  {
    path:"/logout",
    element: <Logout/>
  },

  {
    path:"/riding",
    element:  <Riding/>
  },

  {
    path:"/c-home",
    element:  <ProtectionCap><Chome/></ProtectionCap>
  },
  {
    path:"/C-signup",
    element:<ProtectionCap><Csignup/></ProtectionCap>
  },
  {
    path:"/C-login",
    element:<ProtectionCap><Clogin/></ProtectionCap>
  },

 
])


const App = () => {
  return (
    <RouterProvider router = {routes} />
  )
}

export default App
