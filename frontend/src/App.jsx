import React, { useEffect } from 'react'
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
import CaptainRiding from './pages/CaptainRiding'
import { io } from "socket.io-client";
import { setSocket } from "./redux/socketSlice"; 
import { useDispatch, useSelector } from 'react-redux'

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
    element:  <Chome/>
  },
  {
    path:"/C-signup",
    element:<Csignup/>
  },
  {
    path:"/C-login",
    element:<Clogin/>
  },

  {
    path:"/C-riding",
    
    element:<CaptainRiding/>
  },
 
])

const App = () => {

  const { socket } = useSelector(store => store.socketio);
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      withCredentials: true,
    });

    // Dispatch the socket instance to Redux
    dispatch(setSocket(newSocket));

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, [dispatch]);


  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to server :");
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
    }
  }, [socket]);

 
  

  return (
    <RouterProvider router = {routes} />
  )
}

export default App
