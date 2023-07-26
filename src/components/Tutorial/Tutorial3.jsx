import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Tutorial/Tutorial3.css';

function Tutorial3() {
  const navigate = useNavigate();
  return (
    <div className='homepage3-container'>
      <div className='homepage3-card'>
        <h1 className='homepage3-title'>What are we waiting for? Lets get started</h1>
        <div className='homepage3-img'></div>
        <button className="hompage3-justonemoreclick-btn">
            <span className="hompage-left-arrows">{"<<<"}</span>
            Login
            <span className="hompage-right-arrows">{">>>"}</span>
          </button>
          <button className="hompage3-justonemoreclick-btn" onClick={()=>navigate("/signup")}>
            <span className="hompage-left-arrows">{"<<<"}</span>
            Sign Up
            <span className="hompage-right-arrows">{">>>"}</span>
          </button>
        
      </div>
    </div>
  );
}

export default Tutorial3;
