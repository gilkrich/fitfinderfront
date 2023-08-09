import React, { useState } from 'react'
import './login.css'
import { Outlet, Link, useParams, } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./MainContext";
import TextField from '@mui/material/TextField';
import eye from './images/eye.png'






const Login = () => {  

  let {setrefresh,refresh} = useContext(Context)
  const [showpass,setshowpass] = useState(false)
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault()
  let email = e.target[0].value
  let password = e.target[1].value
      try{
        const newuser = await axios.post(`${import.meta.env.VITE_SERVER}/users/login`, { email:email,password:password})
        if (!newuser) {
          alert('worng')
        }else{
          localStorage.setItem('token',JSON.stringify(newuser.data.token))
          setrefresh(!refresh)
          navigate("/");
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

  <input type="email" placeholder='Email' className='orange-input-login'/>
  <div className='password-container'>
    <input type={showpass ? "text" : "password"} placeholder='Password' minLength={6} maxLength={12} className='orange-input-login-2'/>
    <img src={eye} alt="" className='show-password' onClick={()=>setshowpass(!showpass)} width='15px'/>
  </div>
  <div onClick={()=>navigate("/signup")}>
    <span className='dont-sen'>Don't have a User yet?</span>
    <span className='createuserlogin'>Sign up here!</span>
  </div>
  <button type='submit' className='succses-button'>Submite</button>
</form>

      </div>}
    </div>
  )
}

export default Login