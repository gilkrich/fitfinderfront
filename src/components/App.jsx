import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Layout from './Layout';
import Home from './Home';

function App() {

  return (
   <>
 <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<div> hey you</div>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Route>
      </Routes>
   </>
  )
}

export default App
