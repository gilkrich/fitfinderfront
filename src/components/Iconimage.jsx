import React, { useState } from 'react'

const Iconimage = ({image,seticon}) => {
  const [ischoose,setischoose] = useState(false)
  return (
  <img onClick={()=>{setischoose(!ischoose),seticon(image)}} src={image} alt="" className={ischoose?'choose-icon-image-c':'choose-icon-image'}/>
  )
}

export default Iconimage
