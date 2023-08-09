import React from 'react'
import './stylist.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from './MainContext'
import ClothingCard from '../ClothingCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import arrow from './images/orangearrow.png'
import PaginateBar from './PaginateBar'
import down from './images/down.png'
import downwhite from './images/downwhite.png'
import up from './images/up.png'

function SizeByStyle() {
  let { id } = useParams()
  const shape = localStorage.getItem("userShape")
  const { userinfo, clothes, setClothes, userShape } = useContext(Context)
  const navigate = useNavigate()
  let filtered = []
  let currentclothes = []
  const [currentpage, setcurrentpage] = useState(1)
  const [moviesPerPage] = useState(20);
  const indexOfLastmovie = currentpage * moviesPerPage;
  const indexOfFirstmovie = indexOfLastmovie - moviesPerPage;

  // const handleClick =async(clothes)=>{
  //   // need to check how gender is saved
  //   const {data}=await axios.get(`http://localhost:3003/stylethird/${userinfo.gender}/${clothes}`)
  //   if(data){
  //     setClothes(data)
  //     console.log(data);
  //     navigate(`/stylethird/${userinfo.gender}/${clothes}`)
  //   }
  // }
  const handleClick = async (clothes) => {
    try {
      const { data } = await axios.get(`http://localhost:3003/stylethird/${userinfo.gender}/${clothes}`);
      if (data) {
        setClothes(data);
        // console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (userinfo) {
      handleClick(localStorage.getItem("cloth"));
    }

  }, [userinfo]);
  let fruits = {
    "pear": ['רגיל', "סלים", "מותאמת", "צמוד", "מיני", "אוברול", "שמלה", "שמלת", "WIDE", "טופ", "ישרה", , "High Waist", "גופיה", "טופ", "ללא", "טי שירט", "נינוח", "סטנדרטי", "מותן אלסטי", "אלסטיים", "שרוכים", "מעל"],
    "invertedtriangle": ["רגיל", "סטנדרטי", "סטנדרטית", "regular", "גופייה", "צווארון", "מיני", "טופ", "High Waist", "רחב", "נינוח", "גופייה", "מותאמת", "קלאסית", "אוברסייז", "מותן אלסטי", "אלסטיים", "מעל"],
    "apple": ["רחב", "אוברסייז", "רפויה", "רחבה", "נינוחה", "אלסטי", "MID", "WIDE", "Loose", "טופ", , "High Waist", "מותן אלסטי", "אלסטיים", "מתחת"],
    "chello": ["נינוח", "רפויה", "רחב", "אוברול", "WIDE", "Loose", "טופ", "ישרה", "High Waist", "מותן אלסטי", "אלסטיים", "מתחת"],
    "rectangle": ["סלים", "רגיל", "סטרץ", "רחב", "נינוח", "גופייה", "מותאמת", "קלאסית", "אוברסייז", "צווארון", "מיני", "אוברול", "שמלת", "סקיני", "WIDE", "צמוד", "טופ", "ישרה", , "High Waist", "ללא", "טי שירט", "מותן אלסטי", "אלסטיים"],
    "hourglass": ["סלים", "סטרץ", "צמוד", "אוברול", "שמלה", "שמלת", "Loose", "צמוד", "טופ", "High Waist", "מותן אלסטי", "אלסטיים", "שרוכים", "מעל"]
  }
  if (userinfo) {

    filtered = clothes.filter((item, index) => {
      // console.log(fruits[localStorage.getItem("userShape")]);
      for (let i = 0; i < fruits[shape].length; i++) {
        if (item.productfit.includes(fruits[shape][i])) {
          // console.log(item);
          return true
        }
      }
      return false
    })
    currentclothes = filtered.slice(indexOfFirstmovie, indexOfLastmovie);
  }

  // if (!userinfo) {
  //   return(
  //     <div>
  //       loading...
  //     </div>
  //   )
  // }
  // const seen = {};
  // const uniqueArray = filtered.filter((item) => {
  //   const key = JSON.stringify(item.productname);
  //   const key2 =JSON.stringify(item.productfit)
  //   if (!seen[key]&&!seen[key2]) {
  //     seen[key] = true;
  //     return true;
  //   }
  //   return false;
  // });

  // console.log(uniqueArray);

  return (
    <div className='products-container' style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", rowGap: '60px' }}>
      {<div className='back-button' style={{ marginTop: '50px' }}>
        <img onClick={() => { navigate(-1) }} src={arrow} alt="" width='30px' height='30px' />
        <h2 onClick={() => { navigate(-1) }} >back</h2>
      </div>}
      {/* <div className='back-button' style={{display:"flex"}} onClick={()=>{navigate(-1)}}>
        <img src={arrow} alt="" width='30px' height='30px' />
        <span>back</span>
        </div> */}
      <div style={{ display: "flex", gap: "30px", alignItems: "center", marginTop: '60px', justifyContent: 'center', textAlign: 'center' }}>
        <span>
          <h1>The {id} that are best for you</h1>
          <h2>pick from this list</h2>
        </span>
      </div>

      <div className='arrow-down'>
        <button onClick={() => window.scroll({ top: 10000, left: 0, behavior: 'smooth' })} className='page-number' style={{ width: '40px', height: '40px' }}><img src={down} alt="" width='30px' /></button>
      </div>
      <div className='cards-container'>

        {currentclothes.map((item, index) => {
          return (
            <ClothingCard key={index} item={item} />
          )
        })}
      </div>

      <div className='arrow-down'>
        <button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} className='page-number' style={{ width: '40px', height: '40px' }}><img src={up} alt="" width='30px' /></button>
      </div>

      <PaginateBar currentpage={currentpage} setcurrentpage={setcurrentpage} moviesPerPage={moviesPerPage} filtered={filtered}></PaginateBar>
    </div>
  )
}

export default SizeByStyle