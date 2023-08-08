import React from 'react'
import { useContext } from "react";
import { Context } from "./MainContext";
import axios from 'axios'
import { useState } from 'react';
import './subusers.css'
import blackowomen from './images/blackwomenicon.png'
import whiteman1 from './images/whiteman1.png'
import whiteman2 from './images/whiteman2.png'
import whiteman3 from './images/whiteman3.png'
import blackman1 from './images/blackman1.png'
import whitemwomen1 from './images/whitewomen1.png'
import whitemwomen2 from './images/whitewomen2.png'
import blackwomen2 from './images/blackwomen2.png'

const Subusers = () => {
    let { userinfo } = useContext(Context)
    const [currentsub,setsub] = useState('')
    const [gender, setgender] = useState('')
    const [iconimage,seticon] = useState(currentsub!=''?currentsub.icon:'')
   
    let photoarray =[blackowomen,whiteman1,blackman1,whitemwomen1,whiteman2,blackwomen2,whitemwomen2,whiteman3]
    let subarray = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEoMzdEzXRuV2RD3PizvfAAeAC1EFG7bmuG9sR9H1B5SLiooUO2XX45V3D8lOrBq7NWA&usqp=CAU','https://wallpaperaccess.com/full/99815.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZyiqMe0q6QsJaLrc8_k8PaN9kwvMOiLCSayqmuswq1Oth3P1uSDdpANGqcM43Ntb81A&usqp=CAU']

    

    async function addsub(e) {
        e.preventDefault()
        let username = e.target[0].value
        let measurments3 = {
          waist: e.target[2].value,
          chest: e.target[3].value,
          arms: e.target[4].value,
          hips: e.target[5].value,
          neckline: e.target[6].value
        }
        if (currentsub=='') {
          if (userinfo.subusers.length<3) {
          const finduser = await axios.patch("http://localhost:3003/users/createsub", { id: userinfo._id, measurements: measurments3, username: username, gender: gender ,icon:iconimage })
          }  else{
            alert("too much")
          }
        }else{
            const finduser = await axios.patch("http://localhost:3003/users/editsub", { id: currentsub._id, measurements: measurments3, username: username, gender: gender ,icon: currentsub!=''?currentsub.icon:''})
        }
      }
    

     async function deletesub(subid) {
        const finduser = await axios.patch("http://localhost:3003/users/deletesub", { id: userinfo._id, subid:subid })
      }
    
      console.log(userinfo.subusers.length<3);
     
  return (
    <div className='subusers-main-cont'>
    <h1 style={{ textAlign: 'center' }}>subusers </h1>
    <h1>mys sub users</h1>
    <div className='subusers-cards-cont'>
      {userinfo && userinfo?.subusers.map((item, index) =>(
        <div className='subuser-card'>
           <div className='subuser-card-up'></div>
           <div className='subuser-card-down'>
             <h3>{item.username}</h3>
             <div className='sub-buttons-cont'>
              <button className='sub-button black' onClick={()=>deletesub(item._id)}>delete</button>
              <button className='sub-button white' onClick={()=>setsub(item)}>edit</button>
             </div>
           </div>
           <div className='image-circle'>
              <img className='sub-image' src={item.icon} alt="" />
           </div>
        </div>
      ))}
    </div>
    {<div className='subusers-form-two'>
      <form action="" className='subusers' onSubmit={(e) => addsub(e)}>
        <input type="text" placeholder='user-name' className='subusername-input' defaultValue={currentsub?currentsub.username:''}/>
        <h2>User measurements</h2>
        <div>
          <label htmlFor="">gender</label>
          <select name="" id="" onChange={(e) => setgender(e.target.value)} defaultValue={currentsub?currentsub.gender:''}>
            <option value="" defaultValue={currentsub?currentsub.gender:''}>{currentsub?currentsub.gender:''}</option>
            <option value="man">man</option>
            <option value="women">women</option>
            <option value="boys_9_14">boys 9-14</option>
            <option value="girls_9_14">girls 9-14</option>
            <option value="boys_2_8">boys 2-8</option>
            <option value="girls_2_8">girls 2-8</option>
          </select>
        </div>
        <div className='measurements-cont'>
          <div className='measurments-div'>
            <label htmlFor="">waist</label>
            <input type="text" className='measurements-inputs' defaultValue={currentsub?currentsub.measurements.waist:''}/>
          </div>
          <div className='measurments-div'>
            <label htmlFor="">chest</label>
            <input type="text" className='measurements-inputs' defaultValue={currentsub?currentsub.measurements.chest:''}/>
          </div>
          <div className='measurments-div'>
            <label htmlFor="">arms</label>
            <input type="text" className='measurements-inputs' defaultValue={currentsub?currentsub.measurements.arms:''}/>
          </div>
          <div className='measurments-div'>
            <label htmlFor="">hips</label>
            <input type="text" className='measurements-inputs' defaultValue={currentsub?currentsub.measurements.hips:''}/>
          </div>
          <div className='measurments-div'>
            <label htmlFor="">neckline</label>
            <input type="text" className='measurements-inputs' defaultValue={currentsub?currentsub.measurements.neckline:''}/>
          </div>
            
        </div>
            <div className='images-cont'>
              {photoarray&&photoarray.map((item,index)=>(
                <img src={item} alt="" className='photo-profile-icon' onClick={(e)=>seticon(e.target.src)}/>                
              ))}
            </div>
          <button type='submit'>submit</button>
      </form>
    </div>}
  </div>  
  )
}

export default Subusers

