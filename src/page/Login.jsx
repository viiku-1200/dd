import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../main'
import toast from 'react-hot-toast'
import axios from 'axios'

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {isAuthenticated,setisAuthenticated}= useContext(Context)


    const loginsubmitHandler=async(e)=>{
        e.preventDefault()
        console.log(email,password)
         try{
            const {data}=await axios.post("https://todobackendapp-mows.onrender.com/login",{email,password},{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })
            toast.success(data.message)
            setisAuthenticated(true)
         } catch(error) {
    toast.error(error)
    setisAuthenticated(false)
    console.log(error)

         }}
         console.log(`login success ki valueauth ${isAuthenticated}`)

    if(isAuthenticated === true) return <Navigate to={"/"}/>
  return (
   <div className='login'>
    <section>
        <form onSubmit={loginsubmitHandler}>
        <input type='email'value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
            
            <input type='password' placeholder='Password' value={password}  onChange={(e)=>setPassword(e.target.value)} required/>
            <button type='submit'>Login</button>
            <h4>OR</h4>
            <Link to={"/register"}> Sign Up</Link>
        </form>
    </section>

   </div>
  )
}

export default Login