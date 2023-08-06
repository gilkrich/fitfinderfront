import React from 'react'
import { Link } from 'react-router-dom'
import './stylist.css'
function StylistHomePage() {
  return (
    <div style={{backgroundColor:"antiquewhite"}}>
        <h1>
            learn how to dress yourself!
        </h1>
        
        <h3 style={{color:"black"}}><Link to={'/stylesecond'}>to learn more press here</Link></h3>
    </div>
  )
}

export default StylistHomePage