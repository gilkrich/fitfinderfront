import React, { useEffect, useState, useContext } from "react";
import "../SizeCalcPage/SizeCalcPage.css";
import { PiPantsFill } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";
import { GiSkirt } from "react-icons/gi";
import HMlogo from "../images/HM-Logo.jpg";
import Zaralogo from "../images/Zara-Logo.png";
import AElogo from "../images/AE.png";
import fitlogo from "../images/fitlogo.png";
import womenshirts from "../images/womenshirts.png";
import womenti from "../images/womenti.png";
import womendress from "../images/womendress.png";
import womenjackets from "../images/womenjackets.png";
import womensweater from "../images/womensweater.png";
import arrow from '../images/orangearrow.png'
import { Context } from "../MainContext";


function SizeClacPage() {
  let { setrefresh, refresh } = useContext(Context)
  const { userinfo } = useContext(Context);
  const imagesArr = [HMlogo, Zaralogo, AElogo];
  const [showmidot, setshowmidot] = useState(false)
  const [wich, setwich] = useState(0)
  const companiesArr = ["H&M", "ZARA", "AmericanEagle"];
  const clothTypes = ["shirts", "pants", "dresses"];
  const womenproducts = [
    {
      type: 'T-shirts, Tops & Blouses',
      image: womenti
    },
    {
      type: 'Jeans & Trousers',
      image: womenshirts
    },
    {
      type: 'Dresses',
      image: womendress
    },
    {
      type: 'Jackets & Coats',
      image: womenjackets
    },
    {
      type: 'Knitwear & Sweatshirts',
      image: womensweater
    },
  ]
  let obj = {
    shirts: 0,
    pants: 1,
    dresses: 2
  };
  const [size, setSize] = useState(userinfo?.sizeincompaney);
  const [rightgender, setrightgender] = useState(userinfo?.gender);
  useEffect(() => {
    setSize(userinfo?.sizeincompaney)
    setrightgender(userinfo?.gender)
  }, [userinfo])
  const [currentCloth, setCurrentCloth] = useState("shirts");

  console.log(rightgender);

  return (
    <div className="sizecalcpage-container">

      {!showmidot && <h1 className="sizecalcpage-title">
        What are we looking for?
      </h1>}
      {showmidot && <h1 className="sizecalcpage-title">
        Your fit in {womenproducts[wich].type}
      </h1>}

      <div className="select-use-cont">

        <select className="sub-select" name="subusers" id="" onChange={(e) => {
          setSize(userinfo?.subusers[e.target.value].sizeincompany)
            // if(e.target.value !==  'userinfo?.sizeincompaney') {
            //   setSize(userinfo.subusers[userinfo.subusers.findIndex(v => v.username === e.target.value)].sizeincompaney)
            // }
            ,setrightgender(userinfo?.subusers[e.target.value].gender)
            
        }}>
          <option value="choose" selected={size == userinfo?.sizeincompaney ? "true" : "false"} disabled="disabled">Choose Subuser</option>
          {userinfo?.subusers?.map((subuserobj, i) => {
            return (
              console.log(subuserobj.username
              ),
              <option key={i} value={i}>
                {subuserobj.username}
              </option>
            )
          })}
        </select>



        <button className="sub-select" onClick={() => {setSize(userinfo?.sizeincompaney),setrightgender(userinfo?.gender)}}>Return to MainUser</button>
      </div>

      {showmidot && <div className='back-button'>
        <img src={arrow} alt="" width='30px' height='30px' />
        <h2 onClick={() => setshowmidot(false)}>back</h2>
      </div>}


      {!showmidot && <div className="sizecalcpage-clothes-div">

        {clothTypes.map((item, index) => {
          if (rightgender=='women'||rightgender=="girls_9_14"||rightgender=="girls_2_8") {
            return(
              <div
              onClick={() => { setCurrentCloth(clothTypes[index]), setshowmidot(true), setwich(index) }}
              className="sizecalcpage-single-cloth" style={{ backgroundColor: index % 2 == 0 ? '#9298cc' : '#f6d5e0' }}
            >
              <h2 style={{ color: 'rgb(87 56 175)', width: '140px' }}>{womenproducts[index].type}</h2>
              <img src={womenproducts[index].image} alt="" className="midot-image" />
            </div>
              )
          }else{
            if (index!=2) {
              return(
                <div
                onClick={() => { setCurrentCloth(clothTypes[index]), setshowmidot(true), setwich(index) }}
                className="sizecalcpage-single-cloth" style={{ backgroundColor: index % 2 == 0 ? '#9298cc' : '#f6d5e0' }}
              >
                <h2 style={{ color: 'rgb(87 56 175)', width: '140px' }}>{womenproducts[index].type}</h2>
                <img src={womenproducts[index].image} alt="" className="midot-image" />
              </div>
                )
            }
          }
        })}

        <div
          onClick={() => { setCurrentCloth(clothTypes[0]), setshowmidot(true), setwich(3) }}
          className="sizecalcpage-single-cloth" style={{ backgroundColor: '#f6d5e0' }}
        >
          <h2 style={{ color: 'rgb(87 56 175)', width: '140px' }}>{womenproducts[3].type}</h2>
          <img src={womenproducts[3].image} alt="" className="midot-image" />
        </div>

        <div
          onClick={() => { setCurrentCloth(clothTypes[0]), setshowmidot(true), setwich(4) }}
          className="sizecalcpage-single-cloth" style={{ backgroundColor: '#9298cc', marginBottom: '50px' }}
        >
          <h2 style={{ color: 'rgb(87 56 175)', width: '140px' }}>{womenproducts[4].type}</h2>
          <img src={womenproducts[4].image} alt="" className="midot-image" />
        </div>

      </div>


      }





      {/* <div
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
        </div> */}

      {showmidot && size && (
        <div className="new-girls-style">
          <div className="sizecalcpage-bot-section-bigger">
            <div className="sizecalcpage-bot-section">
              <div className="circle-fit"></div>
              <img src={fitlogo} alt="" width='220px' height='170px' />
              {companiesArr.map((company, i) => (
                <div className="sizecalcpage-final-sizes-div" key={i}>
                  {/* <img
                className="sizecalcpage-logos"
                src={imagesArr[i]}
                alt={`${company} Logo`}
              /> */}
                  <h4>{company}</h4>
                  {console.log(size[i])}
                  <h4 className="sizecalcpage-text">
                    {size[i][company][obj[currentCloth]][currentCloth] ? size[i][company][obj[currentCloth]][currentCloth] : 'sorry no match'}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default SizeClacPage;