import React, { useEffect, createContext, useState } from "react";
import axios from 'axios';


export const Context = createContext({});

<<<<<<< HEAD
const MainContext = ({ children }) => {
  const [user, setUser] = useState({});

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
=======
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
>>>>>>> aa2a7c5412c878af6406d381b5acefaf124866c1

  return (
    <div>
       <Context.Provider value={{userinfo:user}}>
      {children}
    </Context.Provider>
   </div>
  );
};

export default MainContext;
