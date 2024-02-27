import React, { useEffect, useState, useContext } from "react";
import {Context} from '../MainContext'
import companies from '../../companies.json'
function NewSizeCalcPage() {
    const { userinfo } = useContext(Context);
  return (
    <div style={{height:"200px",width:"200px"}}>
        hello world
       {console.log(userinfo)} 
    </div>
  )
}

export default NewSizeCalcPage