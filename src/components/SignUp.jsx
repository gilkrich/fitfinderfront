import React, { useState } from 'react'
import './signup.css'
import axios from 'axios'
import women from './images/women.png'
import star from './images/star.png'

const SignUp = () => {
  const [gender, setgender] = useState('')
  const [madenew,setmadenew] = useState(false)

  async function signup(e) {
    try {
      e.preventDefault()
      let username = e.target[0].value
      let email = e.target[1].value
      let password = e.target[2].value
      let verify = e.target[3].value
      if (password == verify) {
        const newuser = await axios.post("http://localhost:3003/users/register", { username: username, email: email, password: password, gender: gender })
        setmadenew(true)
      } else {
        console.log('passwords do not match')
      }
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className='main-sign-up'>
        <p className='bubble'>Just few more steps and were in</p>
        <img src={women} alt=""  className='women'/>
        {!madenew&&<div className='sign-box-cont'>
        <div className='title-box'>
          <p className='sign-title'>
            sign
          </p>
          <h1 className='sign-title'>
            up
          </h1>
        </div>
        <div>

        <form action="" className='form-cont' onSubmit={(e)=>signup(e)}>
          <input type="text" placeholder='username' className='orange-input' required={true}/>
          <input type="email" placeholder='email' className='orange-input' required={true}/>
          <input type="text" placeholder='password' className='orange-input' required={true} maxLength={12} minLength={6}/>
          <input type="text" placeholder='veirfy' className='orange-input' required={true}  maxLength={12} minLength={6}/>
        <div className='check-cont'>
          <label  className="checkbox">
            <input type="radio" name="gender" onChange={(e)=>setgender(e.target.value)} className='radio' id="1" value="man" />
            <span>man</span>
          </label>
          <label  className="checkbox">
            <input type="radio" name="gender" className='radio' id="2" value="women" onChange={(e)=>setgender(e.target.value)}/>
            <span>women</span>
          </label>
          <label  className="checkbox">
            <input type="radio" name="gender" className='radio' id="3" value="kids" onChange={(e)=>setgender(e.target.value)}/>
            <span>kids</span>
          </label>
        </div>
          <button type='submit' className='submit-button'>submit</button>
        </form>
        <img src={star} alt="" width='100px' className='starnew'/>
        </div>
        <div className='mobile'>
        <p className='bubbletwo'>Just few more steps and were in</p>
        <img src={women} alt=""  className='womenmobile'/>
        {/* <img src={star} alt="" width='100px' className='starnew'/> */}
        </div>
      </div>}
      {madenew&&<div className='succses-cont'>
          <h1 className='sign-title'>Congragulations</h1>
          <div >
            <h1>You're a part of the fit<span>family!</span>we're happy to have you</h1>
          </div>
          <div className='succses-messege-cont'>
            <h3>you can add multiple users for your kids or spouses! Try that now!</h3>
          </div>
          <div className='buttons-cont'>
            <button className='succses-button'>Add User</button>
            <button className='succses-button'>Start looking for your fit</button>
          </div>
        </div>}
    </div>
  )
}


export default SignUp