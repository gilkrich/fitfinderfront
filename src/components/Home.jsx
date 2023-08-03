import React from "react";
import "./home.css";
import purplestar from './images/purplestar.png'
function Home() {
  return (
    <div className="home">
         <h2 className="content-continer-h2" >
          Hi username <br />
          What Are We Doing Today?
        </h2>
      <div className="home-orangered-div"></div>
        {/* <img src={purplestar} alt="" width='100px' className="purple-star-one"/> */}
        {/* <img src={purplestar} alt="" width='100px' className="purple-star-two"/> */}
      <div className="home-content-container">
        <button className="home-btn">your FIT list</button>
        <button className="home-btn">The Stylist Recommendation </button>
        <button className="home-btn">Share Your Fit</button>
        <button className="home-btn">Add Another User</button>
      </div>
    </div>
  );
}

export default Home;
