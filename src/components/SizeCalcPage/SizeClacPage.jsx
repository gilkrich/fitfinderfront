import React from "react";
import "../SizeCalcPage/SizeCalcPage.css";
import { PiPantsFill } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";
import { GiSkirt } from "react-icons/gi";
import HMlogo from "../images/HM-Logo.jpg";
import Zaralogo from "../images/Zara-Logo.png";
import AElogo from "../images/AE.png";

function SizeClacPage() {
  return (
    <div className="sizecalcpage-container">
      <h1 className="sizecalcpage-title">
      Here is your garments measurements calculator,
        <br />
        Choose a type of garment and get the suitable measurements for you{" "}
      </h1>

      <div className="sizecalcpage-clothes-div">
        <div className="sizecalcpage-single-cloth">
          <IoShirt size={90} />
        </div>

        <div className="sizecalcpage-single-cloth">
          <PiPantsFill size={90} />
        </div>

        <div className="sizecalcpage-single-cloth">
          <GiSkirt size={90} />
        </div>
      </div>

      <div className="sizecalcpage-bot-section">
        <div className="sizecalcpage-final-sizes-div">
          <img className="sizecalcpage-logos" src={Zaralogo} alt="Zara Logo" />
          <h1 className="sizecalcpage-text">Size: M</h1>
        </div>
        <div className="sizecalcpage-final-sizes-div">
          <img
            className="sizecalcpage-logos"
            src={AElogo}
            alt="American-Eagle Logo"
          />
          <h1 className="sizecalcpage-text">Size: L</h1>
        </div>
        <div className="sizecalcpage-final-sizes-div">
          <img className="sizecalcpage-logos" src={HMlogo} alt="H&M Logo" />
          <h1 className="sizecalcpage-text">Size: XL</h1>
        </div>
      </div>
    </div>
  );
}

export default SizeClacPage;
