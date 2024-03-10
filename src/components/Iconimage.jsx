import React, { useState } from 'react'

const Iconimage = ({image,seticon,isSelected}) => {
  return (
  <img onClick={()=>{seticon(image)}} src={image} alt="" className={isSelected?'choose-icon-image-c':'choose-icon-image'}/>
  )
}

export default Iconimage
