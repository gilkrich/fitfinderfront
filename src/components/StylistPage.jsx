import React, { useEffect } from 'react'
import './stylist.css'
import { Link,useNavigate } from 'react-router-dom'
import dresses from './images/dresses.png'
import tshirts from './images/tshirts.png'
import skirts from './images/skirts.png'
import pants from './images/pants.png'
import shorts from './images/shorts.png'
import jeans from './images/jeans.png'
import shirts from './images/shirts.png'
import tops from './images/tops.png'
import sweaters from './images/sweaters.png'
import { useContext,} from "react";
import { Context } from "./MainContext";
import axios from 'axios'
function StylistPage() {
  //show different options based on gender
  const navigate=useNavigate()
  let { userinfo,clothes,setClothes} = useContext(Context)
  let obj ={
   "men" :[pants,tshirts,shorts,shirts],
   "women" :[pants,tops,dresses,shirts,jeans],
   "boys_9_14":[pants,shorts,shirts],
   "boys_2_8":[pants,shorts,shirts],
   "girls_2_8":[pants,shirts,dresses],
   "girls_9_14":[pants,dresses,sweaters]
   
  }
  const handleClick =async(clothes)=>{
    //need to check how gender is saved
    localStorage.setItem("cloth",clothes)
    const {data}=await axios.get(`http://localhost:3003/stylethird/${userinfo.gender}/${clothes}`)
    if(data){
      setClothes(data)
      console.log(data);
      navigate(`/stylethird/${userinfo.gender}/${clothes}`)
    }
  }
  
  return (
    <div className='style-container' style={{minHeight:"90vh"}}>
      <h1 className='what-are-we'>what are we searching today?</h1>
      <div className='style-container-container'>
      <div className='style-category-container'>
        {userinfo&&obj[userinfo.gender].map((item,index)=>{
            let name=item.split(".")
            name[0].split("/");
          return(
            <div  key={index} className="sizecalcpage-single-cloth" style={{ backgroundColor: index % 2 == 0 ? '#9298cc' : '#f6d5e0' }} onClick={()=>handleClick(name[0].split("/")[4])}><img src={item} style={{height:"80px",width:"80px"}}></img><h2 style={{ color: 'rgb(87 56 175)', width: '140px' }}>{name[0].split("/")[4]}</h2></div>
          )
        })} 
      </div>
      </div>
    </div>
  )
}

export default StylistPage