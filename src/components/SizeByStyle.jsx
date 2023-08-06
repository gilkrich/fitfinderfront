import React from 'react'
import './stylist.css'
function SizeByStyle() {
  return (
    <div style={{height:"100%",width:"100%",backgroundColor:"antiquewhite"}}>
        <h1>your size in .....</h1>
        <h2>peak from this list</h2>
        <div className='style-list-container'>
        <div className='list-container-left'>
            <div>h&m</div>
            <div>zara</div>
            <div>americaneagle</div>
        </div>
        <div className='list-container-right'>
            <div className='style-size-btn'>size</div>
            <div className='style-size-btn'>size</div>
            <div className='style-size-btn'>size</div>
        </div>
        </div>
    </div>
  )
}

export default SizeByStyle