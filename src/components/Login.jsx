import React from 'react'
import './login.css'
import { Outlet, Link, useParams, } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
    
  async function login(e) {
    e.preventDefault()
  let email = e.target[0].value
  let password = e.target[1].value
      try{
        const newuser = await axios.post("http://localhost:3003/users/login", { email:email,password:password})
        if (!newuser) {
          alert('worng')
        }else{
          localStorage.setItem('token',JSON.stringify(newuser.data.token))
        }
      }catch(err){
          console.log(err)
      }
  }

  return (
    <div className='main-login'>
      {<div className='login-main-cont'>
      <div className='title-box'>
        <p className='sign-title'>
          Login
        </p>
      </div>
      <form action="" className='login-form' onSubmit={(e)=>login(e)}>
        <input type="email" placeholder='email' className='orange-input-login'/>
        <input type="text" placeholder='password' className='orange-input-login' minLength={6} maxLength={12}/>
        <div><span>Dont got a user?</span><Link>Sign up here</Link></div>
        <button type='submit' className='succses-button'>Login</button>
      </form>
      </div>}
    </div>
  )
}

export default Login