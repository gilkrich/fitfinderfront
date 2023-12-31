import React, { useEffect, createContext, useState } from "react";
import axios from 'axios';
export const Context = createContext({});


const MainContext = ({children}) => {
  const [user,setuser] = useState('');
  const [refresh,setrefresh] = useState(false)
  const [clothes,setClothes]=useState([])
  const [userShape,setUserShape]=useState()

  useEffect(()=>{
  async function getuser() { 
      if (localStorage.getItem('token')) {
        const finduser = await axios.post(import.meta.env.VITE_SERVER+"/users/istoken", { token:JSON.parse(localStorage.getItem('token'))})
        setuser(finduser.data)
      }else{
        setuser('')
      }
    }
    getuser();
  }, [refresh]);

  // console.log(user);

  return (
    <div>
       <Context.Provider value={{userinfo:user,setrefresh:setrefresh,refresh:refresh,clothes,setClothes,userShape,setUserShape}}>
      {children}
      </Context.Provider>
      </div>
  );
};

export default MainContext;
