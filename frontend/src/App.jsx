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
const routes = createBrowserRouter([

  {
    path:"/",
    element: <Protection><Home/></Protection>
  },
  {
    path:"/login",
    element:<Protection><Login/></Protection>
  },
  {
    path:"/signup",
    element:<Protection><Signup/></Protection>
  },
  {
    path:"/C-signup",
    element:<Protection><Csignup/></Protection>
  },
  {
    path:"/C-login",
    element:<Protection><Clogin/></Protection>
  },
  {
    path:"/home",
    element:  <Protection><Homepage/></Protection>
  },

  {
    path:"/c-home",
    element:  <ProtectionCap><Chome/></ProtectionCap>
  },

  {
    path:"/logout",
    element:  <Protection><Logout/></Protection>
  },

])


const App = () => {
  return (
    <RouterProvider router = {routes} />
  )
}

export default App
