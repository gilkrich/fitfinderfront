import React from 'react'
import { Outlet, Link, useParams, } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Login</Link>
        <Link to='/signup'>SignUp</Link>
        <Outlet></Outlet>
      </nav>
    </div>
  )

}

export default Layout