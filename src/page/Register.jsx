import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"
import { Context } from '../main'

function Register() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {isAuthenticated,setisAuthenticated}= useContext(Context)
    console.log(isAuthenticated)
    const submitHandler=async(e)=>{
    e.preventDefault()
    console.log(name,email,password)
     try{
        const{data}=await axios.post("https://todobackendapp-mows.onrender.com/new",{name,email,password},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        toast.success(data.message)
        setisAuthenticated(true)
     } catch(error) {
        toast.error(error.response.data.message)
console.log(error)
setisAuthenticated(false)
console.log(`regi errr valu${isAuthenticated}`)
     }}

     if(isAuthenticated) return <Navigate to={"/"}/>

  return (
    <div className='register'>
    <section>
        <form onSubmit={submitHandler}>
            <input type='email'value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
            <input type='text' placeholder='name' value={name}  onChange={(e)=>setName(e.target.value)} required/>
            <input type='password' placeholder='Password' value={password}  onChange={(e)=>setPassword(e.target.value)} required/>
            <button type='submit'>Sign Up</button>
            <h4>OR</h4>
            <Link to={"/login"}> Login</Link>
        </form>
    </section>

   </div>
  )
}


export default Register
