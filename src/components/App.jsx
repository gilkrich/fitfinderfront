import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Layout from './Layout';
import HomePage from './HomePage';
import HomePage2 from './HomePage2';
import HomePage3 from './HomePage3';


function App() {

  return (
   <div>
 <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Login/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
          <Route path='homepage' element={<HomePage/>}></Route>
          <Route path='homepage2' element={<HomePage2/>}></Route>
          <Route path='homepage3' element={<HomePage3/>}></Route>
        </Route>
      </Routes>
   </div>
  )
}

export default App
