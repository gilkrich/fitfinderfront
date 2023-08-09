import React from "react";
import { useNavigate } from "react-router-dom";
import "../Tutorial/Tutorial1.css";
import womenhome from '../images/result.png'
import fitlogo from '../images/fitlogo.png'
import purplestar from "../images/purplestar.png";

function Tutorial1() {

  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <div>
          <img src={fitlogo} alt="" width='340px' height='300px'/>
        </div>
        <h1 className="hompage-welcome-title">
          Welcome to <span id="homepage-bold-text">Fit</span>Finder!
        </h1>
        <button className="hompage-getstarted-btn" onClick={()=>navigate('/tutorial2')}>
          <span className="hompage-left-arrows">{"<<<"}</span>
          Click here to get started
          <span className="hompage-right-arrows">{">>>"}</span>
        </button>
        <div>
          <img className="background-image" src={womenhome} alt="" />
          <img src={purplestar} alt="" width="100px" className="purple-star-one" />
      <img src={purplestar} alt="" width="100px" className="purple-star-two" />
       
        </div>
      </div>
    </div>
  );
}

export default Tutorial1;
