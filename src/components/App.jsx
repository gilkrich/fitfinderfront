import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Layout from './Layout';


function App() {

  return (
   <div>
 <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Login/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
        </Route>
      </Routes>
   </div>
  )
}

export default App
