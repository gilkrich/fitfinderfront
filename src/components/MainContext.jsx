import React, { useEffect, createContext, useState } from "react";
import axios from 'axios';


export const Context = createContext({});

const MainContext = ({children}) => {
  const [user,setuser] = useState('')
    
  useEffect(()=>{
  async function getuser() { 
      if (localStorage.getItem('token')) {
        const finduser = await axios.post("http://localhost:3003/users/istoken", { token:JSON.parse(localStorage.getItem('token'))})
        setuser(finduser.data)
      }else{
        setuser('')
      }
    }
    getuser();
  }, []);

  return (
    <div>
       <Context.Provider value={{userinfo:user}}>
      {children}
    </Context.Provider>
   </div>
  );
};

export default MainContext;
