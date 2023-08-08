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
        const newuser = await axios.post("http://localhost:3003/users/login", { email:email,password:password})
        if (!newuser) {
          alert('worng')
        }else{
          localStorage.setItem('token',JSON.stringify(newuser.data.token))
          setrefresh(!refresh)
          navigate("/home");
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
      {/* <TextField id="standard-basic" label="Standard" variant="standard" type='email'/> */}
        {/* <TextField id="standard-basic" label="Standard" variant="standard" type='password' style={{color:'#f44f29'}}/> */}
        <input type="email" placeholder='email' className='orange-input-login'/>
        <div>
        <input type={showpass?"text":"password"} placeholder='password' className='orange-input-login' minLength={6} maxLength={12}/>
        <img src={eye} alt="" className='show-password' onClick={()=>setshowpass(!showpass)} width='15px'/>
        </div>

        <div><span>Dont got a user?</span><Link>Sign up here</Link></div>
        <button type='submit' className='succses-button'>Login</button>
      </form>
      </div>}
    </div>
  )
}

export default Login