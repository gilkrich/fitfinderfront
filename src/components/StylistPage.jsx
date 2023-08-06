import React from 'react'
import './stylist.css'
import { Link } from 'react-router-dom'
function StylistPage() {
  //show different options based on gender
  return (
    <div className='style-container'>
      <h1 className='what-are-we'>what are we searching today?</h1>
      <div className='style-container-container'>
      <div className='style-category-container'>
        <div className='style-dress-option'><Link to='/stylesthird'>pants</Link></div>
        <div className='style-dress-option'><Link to='/stylesthird'>t-shirts</Link></div>
        <div className='style-dress-option'><Link to='/stylesthird'>dresses</Link></div>
        <div className='style-dress-option'><Link to='/stylesthird'>skirts</Link></div>
      </div>
      </div>
    </div>
  )
}

export default StylistPage