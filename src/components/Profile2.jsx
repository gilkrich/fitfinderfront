import React, { useState } from 'react'
import './profile2.css'
import Profileact from './profileaction/Profileact'
import tape from './images/tape.png'
import person from './images/whiteperson.png'
import group from './images/group.png'
import arrow from './images/orangearrow.png'
import womenimage from './images/blackwomenimage.png'
import { useContext } from "react";
import { Context } from "./MainContext";
import axios from 'axios'
import Subusers from './Subusers'
import  { Sizecontext } from './SizeContext/SizeContext'

const Profile2 = () => {
  let { userinfo } = useContext(Context)
  const{finalObjSize,setMeasurementsClient}=useContext(Sizecontext);
  let { setrefresh, refresh } = useContext(Context)

  const [actions, setactions] = useState(true)
  const [act1, setact1] = useState(false)
  const [act2, setact2] = useState(false)
  const [act3, setact3] = useState(false)
  const [act4, setact4] = useState(false)
  const [currentsub, setsub] = useState('')
  const [editmain,seteditmain] = useState(false)
  const [gender, setgender] = useState('')
  const [showAlert,setShowAlert] = useState(false)

  async function measurments(e) {
    e.preventDefault()
    let measurments3 = {
      waist: e.target[0].value,
      chest: e.target[1].value,
      arms: e.target[2].value,
      hips: e.target[3].value,
      neckline: e.target[4].value
    }
    if (!editmain) {
      setMeasurementsClient(measurments3 && measurments3)
      const finduser = await axios.patch(import.meta.env.VITE_SERVER+"/users/addmeasurements", { id: userinfo._id, measurments: measurments3 })  
      setrefresh(!refresh) 
    }else{
      const finduser = await axios.patch(import.meta.env.VITE_SERVER+"/users/editmeasurements", { id: userinfo._id, measurments: measurments3 })   
      seteditmain(false)
      setrefresh(!refresh)
    }
  }
 const handleSubmit=()=>{
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
}, 4000);
 }

  return (
    <div className='profile-cont-main'>
      <div className='profile-info-cont'>
        {!actions &&
          <div onClick={() => setactions(true)} className='back-button'>
            <img src={arrow} alt="" width='30px' height='30px' />
            <h2>Back</h2>
          </div>}
        {actions && <div className='profile-square-cont'>

          <div className='subuser-card-main'>
            <div className='subuser-card-up-main'>

              <div className='image-circle-main'>
                <img className='sub-image' src={userinfo.icon} alt="" />
              </div>
            </div>
            <div className='subuser-card-down-main'>
              <h3>{userinfo.username}</h3>
            </div>
          </div>
        </div>}
        {/* {actions && <div className='info-cont'>
          <img className='img-info' src={userinfo.icon?userinfo.icon:"data:image/png;base64,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"} alt="" />
          <p>name</p>
        </div>} */}
        {actions && <div className='profile-actions-cont'>
          <div className='box-container-profile' onClick={() => { setact1(true), setactions(false), setact4(false), setact2(false), setact3(false) }}>
            {<Profileact icon={tape} backgroundimage={'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'} color={'#0093E9'} title={'My measurements'} info={'Here you can look and change your user measurments'}></Profileact>}
          </div>
          {/* <div className='box-container-profile'  onClick={() => { setact2(true), setactions(false), setact1(false), setact3(false), setact4(false) }}>
            {<Profileact icon={person} color={''} backgroundimage={'linear-gradient( 117deg,  rgba(123,216,96,1) 39.2%, rgba(255,255,255,1) 156.2% )'} title={'My profile info'} info={'here you can look and change your user details and personal info'}></Profileact>}
          </div> */}
          <div className='box-container-profile' onClick={() => { setact3(true), setactions(false), setact1(false), setact2(false), setact4(false) }}>
            {<Profileact icon={group} color={''} backgroundimage={'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'} title={'My Sub-Users'} info={'Press this to view or change your sub-users'} ></Profileact>}
          </div>
          {/* <div className='box-container-profile'>
            {<Profileact color={''} backgroundimage={'radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )'} title={'My user info'} info={'here you can look and change your user details and personal info'}></Profileact>}
          </div> */}
        </div>}

        {!actions && <div className='action-main-cont'>

          {act3 && <Subusers></Subusers>}



          {act1 && <div>
            <h1 style={{ textAlign: 'center' }}>Fill & Edit your measurments</h1>
            <div className='subusers-form'>
              <form action="" className='subusers' onSubmit={(e) => measurments(e)}>
                <h2>My measurements</h2>

                <div className='measurements-cont'>
                  <div className='measurments-div'>
                    <label htmlFor="">Waist</label>
                   {(editmain||!userinfo.hasOwnProperty("measurements"))&&<input type="text"  required={true} className='measurements-inputs' defaultValue={editmain?userinfo.measurements[0].data.waist:''}/>}
                   {userinfo.hasOwnProperty("measurements")&&!editmain&&<div className='measurements-inputs'>{userinfo.measurements[0].data.waist}</div>}
                  </div>
                  <div className='measurments-div'>
                    <label htmlFor="">Chest</label>
                    {(editmain||!userinfo.hasOwnProperty("measurements"))&&<input type="text" required={true} className='measurements-inputs' defaultValue={editmain?userinfo.measurements[0].data.chest:''}/>}
                    {userinfo.hasOwnProperty("measurements")&&!editmain&&<div className='measurements-inputs'>{userinfo.measurements[0].data.chest}</div>}
                  </div>
                  <div className='measurments-div'>
                    <label htmlFor="">Arms</label>
                    {(editmain||!userinfo.hasOwnProperty("measurements"))&&<input type="text" required={true} className='measurements-inputs' defaultValue={editmain?userinfo.measurements[0].data.arms:''}/>}
                    {userinfo.hasOwnProperty("measurements")&&!editmain&&<div className='measurements-inputs'>{userinfo.measurements[0].data.arms}</div>}
                  </div>
                  <div className='measurments-div'>
                    <label htmlFor="">Hips</label>
                    {(editmain||!userinfo.hasOwnProperty("measurements"))&&<input type="text" required={true} className='measurements-inputs' defaultValue={editmain?userinfo.measurements[0].data.hips:''}/>}
                    {userinfo.hasOwnProperty("measurements")&&!editmain&&<div className='measurements-inputs'>{userinfo.measurements[0].data.hips}</div>}
                  </div>
                  <div className='measurments-div'>
                    <label htmlFor="">Neckline</label>
                    {(editmain||!userinfo.hasOwnProperty("measurements"))&&<input type="text" required={true} className='measurements-inputs' defaultValue={editmain?userinfo.measurements[0].data.neckline:''}/>}
                    {userinfo.hasOwnProperty("measurements")&&!editmain&&<div className='measurements-inputs'>{userinfo.measurements[0].data.neckline}</div>}
                  </div>
                </div>
                {(editmain||!userinfo.measurements)&&<button type='submit' className='user-mesurments-submit' onClick={handleSubmit}>submit</button>}
              </form>
                {userinfo.measurements&&<button onClick={()=>seteditmain(!editmain)} className='user-mesurments-submit'>Edit</button>}
            </div>
          </div>
          }



          {act2 && <div>
            <h1>My info</h1>
            <div className='profile-square-cont'>

              <div className='subuser-card-main'>
                <div className='subuser-card-up-main'>

                  <div className='image-circle-main'>
                    <img className='sub-image' src={userinfo.icon} alt="" />
                  </div>
                </div>
                <div className='subuser-card-down-main-act'>
                  <div className='profile-info-act-div'>
                  <div className='info-div'>
                  <h4>My UserName  - </h4>
                  <p>{userinfo.username}</p>
                  </div>
                  <div className='info-div'>
               <h4>Email   -</h4>
                  <p>{userinfo.email}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>}
        {/* <img src={womenimage} alt="" className='women-image-black' /> */}
      </div>
      {showAlert&&(<div className='custom-alert'><span>Measurements added successfully!</span></div>)}
    </div>
  )



}


export default Profile2
