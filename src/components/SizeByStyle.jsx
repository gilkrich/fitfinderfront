import React from 'react'
import './stylist.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import {Context} from './MainContext'
import ClothingCard from '../ClothingCard'
function SizeByStyle() {
    let {id}=useParams()
    const {userinfo,clothes,setClothes}=useContext(Context)

  return (
    <div className='products-container' style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>your size in {id} is ...</h1>
        <h2>pick from this list</h2>
       <div className='cards-container'>
        {clothes&&clothes.map((item,index)=>{
            return(
                <ClothingCard key={index} item={item}/>
                )
            })}
            </div>
    </div>
  )
}

export default SizeByStyle