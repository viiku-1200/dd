import React from 'react'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

import Home from './page/home.jsx'

import Headers from './components/Headers.jsx'
import Register from './page/Register.jsx'
import Login from './page/Login.jsx'
import Profile from './page/Profile.jsx'
import { Toaster } from 'react-hot-toast'


function App() {
  return <Router>
     <Headers/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
    <Toaster/>
  </Router>
}

export default App


