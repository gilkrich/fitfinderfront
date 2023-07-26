import React from "react";
import { useNavigate } from "react-router-dom";
import "../Tutorial/Tutorial1.css";

function Tutorial1() {

  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <div className="homepage-img"></div>
        <h1 className="hompage-welcome-title">
          Welcome to <span id="homepage-bold-text">Fit</span>Finder!
        </h1>
        <button className="hompage-getstarted-btn" onClick={()=>navigate('/tutorial2')}>
          <span className="hompage-left-arrows">{"<<<"}</span>
          Click here to get started
          <span className="hompage-right-arrows">{">>>"}</span>
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Tutorial1;
