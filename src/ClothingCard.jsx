import React from 'react'
import '../src/components/stylist.css'
import { Link } from 'react-router-dom'
function ClothingCard({item}) {
  return (
    <div className='card'>
        <a  href={item.producturl} target="_blank">
        <img  className="card-img" src={item.productimage} style={{width:"250px",height:"300px"}}></img>
        <div className='card-content-container'>
        <div style={{display:"flex",flexDirection:"column"}}><span>:שם </span><span>{item.productname}</span> </div>
        <div  style={{display:"flex",flexDirection:"column"}}><span>:גזרה</span> <span>{item.productfit}</span></div>
        <div  style={{display:"flex",flexDirection:"column"}}><span>:חברה</span><span>{item.companyname}</span> </div>
        </div>
        </a>
    </div>
  )
}

export default ClothingCard