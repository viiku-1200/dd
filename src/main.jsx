import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/app.scss"
import {createContext} from "react"
import { useState } from 'react'

 export const Context=createContext()

const AppWrapper=()=>{
  const[isAuthenticated,setisAuthenticated]=useState(false)
  return(
    <Context.Provider
    value={{isAuthenticated,setisAuthenticated}}
    >
      <App/>
    </Context.Provider>

  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AppWrapper/>
  </StrictMode>,
)
