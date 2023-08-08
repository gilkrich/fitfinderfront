import { useContext } from "react";
import "../Home/Home.css";
import purplestar from "../images/purplestar.png";
import womenhome from "../images/womenhome.png";
import { Context } from "../MainContext";
import { Link } from "react-router-dom";


function Home() {
  const { userinfo } = useContext(Context);
  return (
    <div className="home">
      <h2 className="content-continer-h2">
        {`Hi ${userinfo && userinfo.username}`} <br />
        What Are We Doing Today?
      </h2>
      <div className="home-orangered-div"></div>
      <img src={purplestar} alt="" width="100px" className="purple-star-one" />
      <img src={purplestar} alt="" width="100px" className="purple-star-two" />
      <img src={womenhome} alt="" className="womenhome" />
      <div className="home-content-container">
        <button className="home-btn">your FIT list</button>

        <Link to="/stylehome">
          <button className="home-btn">The Stylist Recommendation </button>
        </Link>
        <button className="home-btn">Share Your Fit</button>
        <button className="home-btn">Add Another User</button>
      </div>
    </div>
  );
}

export default Home;
