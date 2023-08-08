import React, { useEffect, useState, useContext } from "react";
import "../SizeCalcPage/SizeCalcPage.css";
import { PiPantsFill } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";
import { GiSkirt } from "react-icons/gi";
import HMlogo from "../images/HM-Logo.jpg";
import Zaralogo from "../images/Zara-Logo.png";
import AElogo from "../images/AE.png";
import { Context } from "../MainContext";

function SizeClacPage() {
  const { userinfo } = useContext(Context);
  const imagesArr = [HMlogo, Zaralogo, AElogo];
  const companiesArr = ["H&M", "ZARA", "AmericanEagle"];
  const clothTypes = ["shirts", "pants", "dresses"];
  let obj = {
    shirts: 0,
    pants: 1,
    dresses: 2
  };
  const [size, setSize] = useState(userinfo?.sizeincompaney);
  const [currentCloth, setCurrentCloth] = useState("shirts");
  // const size = userinfo?.sizeincompaney;
  // console.log(size);
  // console.log(userinfo.subusers[0].username);


  return (
    <div className="sizecalcpage-container">
      <h1 className="sizecalcpage-title">
        Here is your garments measurements calculator,
        <br />
        Choose a type of garment and get the suitable measurements for you{" "}
      </h1>
      
      <select name="subusers" id="" onChange={(e) => {setSize(userinfo?.subusers[e.target.value].sizeincompany)
        // if(e.target.value !==  'userinfo?.sizeincompaney') {
        //   setSize(userinfo.subusers[userinfo.subusers.findIndex(v => v.username === e.target.value)].sizeincompaney)
        // }
        ,console.log(e.target.value);
      }}>
        <option value="choose" selected={size==userinfo?.sizeincompaney?"true":"false"} disabled="disabled">choose</option>
        {userinfo?.subusers?.map((subuserobj, i) => {return(
          console.log(subuserobj.username
            ),
          <option key={i} value={i}>
            {subuserobj.username}
          </option>
        )})}
      </select>

      <button onClick={()=>setSize(userinfo?.sizeincompaney)}>clear sub</button>

      <div className="sizecalcpage-clothes-div">
        <div
          onClick={() => setCurrentCloth("shirts")}
          className="sizecalcpage-single-cloth"
        >
          <IoShirt size={90} />
        </div>

        <div
          onClick={() => setCurrentCloth("pants")}
          className="sizecalcpage-single-cloth"
        >
          <PiPantsFill size={90} />
        </div>

        <div
          onClick={() => setCurrentCloth("skirts")}
          className="sizecalcpage-single-cloth"
        >
          <GiSkirt size={90} />
        </div>
      </div>

      {size && (
        <div className="sizecalcpage-bot-section">
          {companiesArr.map((company, i) => (
            <div className="sizecalcpage-final-sizes-div" key={i}>
              <img
                className="sizecalcpage-logos"
                src={imagesArr[i]}
                alt={`${company} Logo`}
              />
              {console.log(size[i])}
              <h1 className="sizecalcpage-text">
                Size:{size[i][company][obj[currentCloth]][currentCloth]}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SizeClacPage;
