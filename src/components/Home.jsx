import React from 'react'
import "./home.css"
function Home() {
  return (
    <div className='home'>
        <div className="home-orangered-div"></div>
        <div className="star" id='star-1' ></div>
        <div className="star" id='star-2' ></div>
        
        <div className='home-content-container'>
        <h2>Hi username <br />What Are We Doing Today?</h2>
        <button className='home-btn' >your FIT list</button>
        <button className='home-btn' >The Stylist Recommendation </button>
        <button className='home-btn' >Share Your Fit</button>
        <button className='home-btn' >Add Another User</button>
        </div>
    </div>
  )
}

export default Home