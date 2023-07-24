import React from 'react'
import { Outlet, Link, useParams, } from 'react-router-dom'
import '../components/Layout.css'

const Layout = () => {
  return (
    <div>
      <nav className='top-nav'>
        <Link to='/'>Login</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/homepage'>Home</Link>
      </nav>
      <Outlet/>
    </div>
  )

}

export default Layout