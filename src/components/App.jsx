import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Layout from './Layout';
import Home from './Home';
import Tutorial1 from '../components/Tutorial/Tutorial1'
import Tutorial2 from '../components/Tutorial/Tutorial2'
import Tutorial3 from '../components/Tutorial/Tutorial3'
import About from './AboutUs/About';
import Chat from './Chat/Chat';
import ProfilePage from './ProfilePage/ProfilePage';
import SizesCalculator from './SizesCalculator/SizesCalculator';

function App() {

  return (
   <>
 <Routes>
        <Route path='/' element={<Layout/>}>      
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='tutorial1' element={<Tutorial1/>}></Route>
          <Route path='tutorial2' element={<Tutorial2/>}></Route>
          <Route path='tutorial3' element={<Tutorial3/>}></Route>
          <Route path='profile' element={<ProfilePage/>}></Route>
          <Route path='sizescalculator' element={<SizesCalculator/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='chat' element={<Chat/>}></Route>

        </Route>
      </Routes>
   </>
  )
}

export default App
