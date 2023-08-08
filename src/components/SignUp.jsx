import React, { useState } from 'react'
import './signup.css'
import axios from 'axios'
import women from './images/women.png'
import star from './images/star.png'
import blackowomen from './images/blackwomenicon.png'
import whiteman1 from './images/whiteman1.png'
import whiteman2 from './images/whiteman2.png'
import whiteman3 from './images/whiteman3.png'
import blackman1 from './images/blackman1.png'
import whitemwomen1 from './images/whitewomen1.png'
import whitemwomen2 from './images/whitewomen2.png'
import blackwomen2 from './images/blackwomen2.png'


const SignUp = () => {
  const [gender, setgender] = useState('')
  const [madenew,setmadenew] = useState(false)
  const [ username,setusername] = useState()
  const [ email,setemail] = useState()
  const [ password,setpassword] = useState()
  const [ verify,setverify] = useState()
  const[nextpage,setnextpage] = useState(false)
  const[icon,seticon] = useState()
  let photoarray =[blackowomen,whiteman1,blackman1,whitemwomen1,whiteman2,blackwomen2,whitemwomen2,whiteman3]

  async function signup(e) {
    try {
      e.preventDefault()
      if (password == verify) {
        const newuser = await axios.post("http://localhost:3003/users/register", { username: username, email: email, password: password, gender: gender , icon:icon })
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


         {!nextpage&&<form action="" className='form-cont-two' onSubmit={()=>setnextpage(true)} >
          <input type="text" placeholder='username' className='orange-input' required={true} onChange={(e)=>setusername(e.target.value)} defaultValue={username?username:''}/>
          <div className='main-profile-icon-cont'>
                {photoarray.map((item,index)=>(
                  <img src={item} alt="" width='80px' onClick={()=>seticon(item)}/>
                  ))}
          </div>
                  <button className='submit-button'>next</button>
                  </form>}




       { nextpage&&<form action="" className='form-cont' onSubmit={(e)=>signup(e)}>
          <input type="email" placeholder='email' className='orange-input' required={true} onChange={(e)=>setemail(e.target.value)} defaultValue={email?email:''}/>
          <input type="text" placeholder='password' className='orange-input' required={true} maxLength={12} minLength={6} onChange={(e)=>setpassword(e.target.value)} defaultValue={password?password:''}/>
          <input type="text" placeholder='veirfy' className='orange-input' required={true}  maxLength={12} minLength={6} onChange={(e)=>setverify(e.target.value)} defaultValue={verify?verify:''}/>
        <div className='check-cont'>
          <label  className="checkbox">
            <input type="radio" name="gender" onChange={(e)=>setgender(e.target.value)} className='radio' id="1" value="men" />
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
        </form>}
       {nextpage&&<button className='submit-button' style={{width:'65px'}} onClick={()=>setnextpage(false)}>back</button>}
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