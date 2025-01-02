import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Csignup from './pages/Csignup'
import Clogin from './pages/Clogin'


const routes = createBrowserRouter([

  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/C-signup",
    element:<Csignup/>
  },
  {
    path:"/C-login",
    element:<Clogin/>
  },

])


const App = () => {
  return (
    <RouterProvider router = {routes} />
  )
}

export default App
