import React, { useEffect, createContext, useState } from "react";
import axios from 'axios';

export const Context = createContext({});

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

  return (
    <Context.Provider value={{ user }}>
      {children}
    </Context.Provider>
  );
};

export default MainContext;
