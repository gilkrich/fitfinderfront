import React, { useEffect } from 'react'
import './stylist.css'
import { Link,useNavigate } from 'react-router-dom'
import dresses from './images/womendress.png'
import tshirts from './images/womenti.png'
import skirts from './images/skirts.png'
import pants from './images/womenshirts.png'
import shorts from './images/shorts.png'
import jeans from './images/womenshirts.png'
import shirts from './images/womenti.png'
import tops from './images/tops.png'
import sweaters from './images/womensweater.png'
import { useContext,} from "react";
import { Context } from "./MainContext";
import axios from 'axios'
function StylistPage() {
  //show different options based on gender
  const navigate=useNavigate()
  let { userinfo,clothes,setClothes} = useContext(Context)
  let obj ={
   "men" :[{img:pants,name:'Pants'},{img:tshirts,name:'T-shirts'},{img:shorts,name:'Shorts'},{img:shirts,name:'Shirts'}],
   "women" :[{img:pants,name:'Pants'},{img:tops,name:'Tops'},{img:dresses,name:'Dresses'},{img:shirts,name:'Shirts'},{img:jeans,name:'Jeans'}],
   "boys_9_14":[{img:pants,name:'Pants'},{img:shorts,name:'Shorts'},{img:shirts,name:'Shirts'}],
   "boys_2_8":[{img:pants,name:'Pants'},{img:shorts,name:'Shorts'},{img:shirts,name:'Shirts'}],
   "girls_2_8":[{img:pants,name:'Pants'},{img:shirts,name:'Shirts'},{img:dresses,name:'Dresses'}],
   "girls_9_14":[{img:pants,name:'Pants'},{img:dresses,name:'Dresses'},{img:sweaters,name:'sweaters'}]
   
  }
  let obj2={
    "men" :["pants","tshirts","shorts","shirts"],
    "women" :["pants","tops","dresses","shirts","jeans"],
    "boys_9_14":["pants","shorts","shirts"],
    "boys_2_8":["pants","shorts","shirts"],
    "girls_2_8":["pants","shirts","dresses"],
    "girls_9_14":["pants","dresses","sweaters"]
    
   }
  const handleClick =async(clothes)=>{
    //need to check how gender is saved
    localStorage.setItem("cloth",clothes)
    const {data}=await axios.get(`${import.meta.env.VITE_SERVER}/stylethird/${userinfo.gender}/${clothes}`)
    if(data){
      setClothes(data)
      console.log(data);
      navigate(`/stylethird/${userinfo.gender}/${clothes}`)
    }
  }
  
  return (
    <div className='style-container' style={{minHeight:"90vh"}}>
      <h1 className='what-are-we'>What are we searching for today?</h1>
      <div className='style-container-container'>
      <div className='style-category-container'>
        {userinfo&&obj[userinfo.gender].map((item,index)=>{
            // let name=item.split(".")
            // name[0].split("/");
          return(
            <div  key={index} className="sizecalcpage-single-cloth" style={{ backgroundColor: index % 2 == 0 ? '#9298cc' : '#f6d5e0' }} onClick={()=>handleClick(obj2[userinfo.gender][index])}><img src={item.img} style={{height:"145px",width:"145px"}}></img><h2 style={{ color: 'rgb(87 56 175)', width: '140px' }}>{item.name}</h2></div>
          )
        })} 
      </div>
      </div>
    </div>
  )
}

export default StylistPage
