import React from 'react'
import { useEffect } from "react";
import { createContext, useState } from "react";
export const Context = createContext({})

const MainContext = ({children}) => {
  return (
    <div>
       <Context.Provider value={{}}>
      {children}
    </Context.Provider>
    </div>
  )
}

export default MainContext
