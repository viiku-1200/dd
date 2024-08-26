import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main'

function Headers() {
   const {isAuthenticated,setisAuthenticated}= useContext(Context)
   
console.log(isAuthenticated)


  return (
    <nav className='header' >
        <div>
            <h2>Todo List</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            
            <Link to={"Profile"}>Profile</Link>
            {
                isAuthenticated?<button className='btn'>Logout</button>
                :<Link to={"login"}>Login</Link>
            }
            
            {/* <Link to={"register"}>Register</Link>
            <Link to={"logout"}>Logout</Link> */}




        </article>
    </nav>
  )
}

export default Headers