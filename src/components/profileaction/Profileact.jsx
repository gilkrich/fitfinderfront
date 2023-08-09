import React from 'react'
import './profileact.css'

const Profileact = ({color,title,info,backgroundimage,icon}) => {
  return (
    <div className='profile-action-cont'>
  
       <div style={{backgroundColor:color,backgroundImage:backgroundimage}} className='circle'>
       <img className='action-img' src={icon} alt="" width='36px'/>
       </div>
        <h1 className='action-title'>
       {title}
       </h1>
       <p className='action-info'>
        {info}
       </p> 
        </div> 
  )
}

export default Profileact
