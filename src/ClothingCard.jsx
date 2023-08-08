import React from 'react'
import '../src/components/stylist.css'
import { Link } from 'react-router-dom'
function ClothingCard({item}) {
  return (
    <div className='card'>
        <a  href={item.producturl} target="_blank">
        <img  className="card-img" src={item.productimage} style={{width:"250px",height:"300px"}}></img>
        <div className='card-content-container'>
        <div>שם: {item.productname}</div>
        <div>גזרה: {item.productfit}</div>
        <div>חברה: {item.companyname}</div>
        </div>
        </a>
    </div>
  )
}

export default ClothingCard