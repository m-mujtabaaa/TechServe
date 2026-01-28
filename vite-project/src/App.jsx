import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Homediv2 from './components/Homediv2'
import Homediv3 from './components/Homediv3'
import Homediv4 from './components/Homediv4'
import Homediv5 from './components/Homediv5'
import Homediv6 from './components/Homediv6'
import Homediv7 from './components/Homediv7'
import Homediv8 from './components/Homediv8'
import './App.css'
import Privacy from './components/privacy'
import Curser2 from './components/Curser2'
import About from './components/About'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Contact from './components/Contact'
import Registeration from './components/Registeration'
import Login from './components/Login'

]/;
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Curser2/><Home/><Homediv2/><Homediv3/><Homediv4/><Homediv5/><Homediv6/><About/><Homediv7/><Homediv8/></>
    },
    {
      path:"/Privacyp",
      element:<><Navbar/><Curser2/><Privacy/><Homediv8/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Curser2/><Contact/><Homediv8/></>
    },
    {
      path:"/registeration",
      element:<><Navbar/><Curser2/><Registeration/><Homediv8/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Curser2/><Login/><Homediv8/></>
    },
  ])

  return (


    <RouterProvider router={router}/>

  )
}

export default App
