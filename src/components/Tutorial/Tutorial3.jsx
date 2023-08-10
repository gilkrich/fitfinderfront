import React from "react";
import { useNavigate } from "react-router-dom";
import "../Tutorial/Tutorial3.css";
import Tutorial3IMG from "../images/tutorial3img.png";
import redsplash from "../images/star.png";

function Tutorial3() {
  const navigate = useNavigate();
  return (
    <div className="homepage3-container">
      <div className="homepage3-card">
        <h1 className="homepage3-title">
          So what are we waiting for?
          <br />
          Lets get started
        </h1>
        <div className="homepage3-img">
          <img className="tutorialimg3" src={Tutorial3IMG} alt="" />
        </div>
        <button
          className="hompage3-justonemoreclick-btn"
          onClick={() => navigate("/login")}
        >
          <span className="hompage-left-arrows">{"<<<"}</span>
          Login
          <span className="hompage-right-arrows">{">>>"}</span>
        </button>
        <button
          className="hompage3-justonemoreclick-btn-bot"
          onClick={() => navigate("/signup")}
        >
          <span className="hompage-left-arrows">{"<<<"}</span>
          Sign Up
          <span className="hompage-right-arrows">{">>>"}</span>
        </button>
        <button
          className="hompage3-justonemoreclick-btn-bot"
          onClick={() => navigate(localStorage.getItem("token")?"/home":"/tutorial1")}
        >
          <span className="hompage-left-arrows">{"<<<"}</span>
          Exit Tutorial
          <span className="hompage-right-arrows">{">>>"}</span>
        </button>

        <img src={redsplash} alt="" width="100px" className="red-star-one" />
        <img src={redsplash} alt="" width="100px" className="red-star-two" />
      </div>
    </div>
  );
}

export default Tutorial3;
