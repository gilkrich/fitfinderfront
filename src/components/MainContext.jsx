import React from 'react'
import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from 'axios'
export const Context = createContext({})

const MainContext = ({children}) => {
  const [user,setuser] = useState({})
    
  useEffect(()=>{
  async function getuser() { 
      if (localStorage.getItem('token')) {
        const data = await axios.post("http://localhost:3003/users/istoken", { token:localStorage.getItem('token')})
        console.log(data)
      }
    }
    getuser()
  },[])

console.log(user);

  return (
    <div>
       <Context.Provider value={{}}>
      {children}
    </Context.Provider>
    </div>
  )
}

export default MainContext
