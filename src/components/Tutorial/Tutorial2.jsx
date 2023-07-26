import React from "react";
import { useNavigate } from "react-router-dom";
import "../Tutorial/Tutorial2.css";

function Tutorial2() {
  const navigate = useNavigate();
  return (
    <div className="homepage2-container">
      <div className="homepage2-card">
        <h1 className="homepage2-title">You will be able to find here</h1>
        <div className="homepage2-both-sides">
          <div className="homepage2-web-options">
            <h1 className="homepage2-sen">
              <span className="homepage2-right-arrows">{">>"}</span>The Perfect
              Size Calculator
            </h1>
            <h1 className="homepage2-sen">
              <span className="homepage2-right-arrows">{">>"}</span>The Perfect
              Size Calculator
            </h1>
            <h1 className="homepage2-sen">
              <span className="homepage2-right-arrows">{">>"}</span>The Perfect
              Size Calculator
            </h1>
          </div>
          <div className="homepage2-right-side">
            <div className="homepage2-clothes-img"></div>
          </div>
        </div>
        <div className="homepage2-button-container">
          <button className="hompage2-justonemoreclick-btn" onClick={()=>navigate('/tutorial3')}>
            <span className="hompage-left-arrows">{"<<<"}</span>
            Just one more click
            <span className="hompage-right-arrows">{">>>"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tutorial2;
