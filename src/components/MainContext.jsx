import React, { useEffect, createContext, useState } from "react";
import axios from 'axios';
export const Context = createContext({});


  // useEffect(() => {
  //   async function getUser() {
  //     if (localStorage.getItem('token')) {
  //       try {
  //         const findUserResponse = await axios.post("http://localhost:3003/users/istoken", { token: localStorage.getItem('token') });
  //         setUser(findUserResponse.data);
  //       } catch (error) {
  //         console.log(error);
  //         // Handle any error that might occur during the API call
  //       }
  //     } else {
  //       setUser({});
  //     }
  //   }
  //   getUser();
  // }, []);

const MainContext = ({children}) => {
  const [user,setuser] = useState('');
  const [refresh,setrefresh] = useState(false)
  const [clothes,setClothes]=useState([])
  const [userShape,setUserShape]=useState()

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
  }, [refresh]);

  return (
    <div>
       <Context.Provider value={{userinfo:user,setrefresh:setrefresh,refresh:refresh,clothes,setClothes,userShape,setUserShape}}>
      {children}
      </Context.Provider>
      </div>
  );
};

export default MainContext;
