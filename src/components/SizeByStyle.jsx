import React from 'react'
import './stylist.css'
import { useParams } from 'react-router-dom'
import { useContext,useEffect,useState} from 'react'
import {Context} from './MainContext'
import ClothingCard from '../ClothingCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SizeByStyle() {
    let {id}=useParams()
    const shape=localStorage.getItem("userShape")
    const {userinfo,clothes,setClothes,userShape}=useContext(Context)
    const navigate=useNavigate()
    let filtered=[]
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
      if(userinfo){
        handleClick(localStorage.getItem("cloth"));
      }
      
    }, [userinfo]);
    let fruits = {
      "pear" : ['רגיל',"סלים","מותאמת","צמוד","מיני","אוברול","שמלה","שמלת","WIDE","טופ","ישרה",,"High Waist","גופיה","טופ","ללא","טי שירט","נינוח","סטנדרטי","מותן אלסטי","אלסטיים","שרוכים","מעל"],
      "invertedtriangle":["רגיל","סטנדרטי","סטנדרטית","regular","גופייה","צווארון","מיני","טופ","High Waist","רחב","נינוח","גופייה","מותאמת","קלאסית","אוברסייז","מותן אלסטי","אלסטיים","מעל"],
      "apple":["רחב","אוברסייז","רפויה","רחבה","נינוחה","אלסטי","MID","WIDE","Loose","טופ",,"High Waist","מותן אלסטי","אלסטיים","מתחת"],
      "chello":["נינוח","רפויה","רחב","אוברול","WIDE","Loose","טופ","ישרה","High Waist","מותן אלסטי","אלסטיים","מתחת"],
      "rectangle":["סלים","רגיל","סטרץ","רחב","נינוח","גופייה","מותאמת","קלאסית","אוברסייז","צווארון","מיני","אוברול","שמלת","סקיני","WIDE","צמוד","טופ","ישרה",,"High Waist","ללא","טי שירט","מותן אלסטי","אלסטיים"],
      "hourglass":["סלים","סטרץ","צמוד","אוברול","שמלה","שמלת","Loose","צמוד","טופ","High Waist","מותן אלסטי","אלסטיים","שרוכים","מעל"]
    }
    if(userinfo){

      filtered =clothes.filter((item,index)=>{
        // console.log(fruits[localStorage.getItem("userShape")]);
        for(let i=0;i < fruits[shape].length;i++){
          if(item.productfit.includes(fruits[shape][i])){
            // console.log(item);
            return true
          }
        }
        return false
      })
      console.log(filtered);
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
    <div className='products-container' style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}>
      <div style={{display:"flex",gap:"30px",alignItems:"center"}}>
        <span onClick={()=>{navigate(-1)}}>back</span>
        <span>
        <h1>your size in {id} is ...</h1>
        <h2>pick from this list</h2>
        </span>
      </div>
       <div className='cards-container'>
        
        {filtered.map((item,index)=>{
            return(
                <ClothingCard key={index} item={item}/>
                )
            })}
            </div>
    </div>
  )
}

export default SizeByStyle