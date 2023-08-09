
import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import "../components/Layout.css";
import { useContext } from "react";
import { Context } from "./MainContext";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import fitlogo from './images/fitlogo.png'
import triup from './images/triup.png'
import tridown from './images/tridown.png'
import whiteicon from './images/whiteicon.png'
import { useNavigate } from "react-router-dom";
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import tiktok from "./images/tiktok.png"
import snapchat from "./images/snapchat.png"

const Layout = () => {
  const navigate = useNavigate();
  let { setrefresh, refresh } = useContext(Context)
  let { userinfo } = useContext(Context)
  const [isOpen, setOpen] = useState(false)
  const [profilenav, setnav] = useState(false)


  return (
    <>
      <nav className="top-nav">
        <div className="logo-side">
          <Link to="/home">
          <img src={fitlogo} alt="" width='120px' />
          </Link>
        </div>

        {userinfo && <div className="middle-nav">
          <Link className="layout-link" to={userinfo ? "/" : "/home"}>Home</Link>
          <Link className="layout-link" to={"/sizecalcpage"}><div className="logo">Calculator</div></Link>


          {/* <Link className="layout-link" to={"/style"}><div className="logo">style</div></Link> */}



        </div>}

        <div className="login-side">
          {!userinfo && <Link className=" login-button" to='/login'>Login</Link>}
          {!userinfo && <Link className=" sign-button" to='/signup'>SignUp</Link>}
          <div className="profile-image-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {userinfo && <Link to="/profile2" ><img id="layout-user" src={whiteicon} width='30px' /></Link>}
            {userinfo && !profilenav && <img src={triup} alt="" width='13px' onClick={() => setnav(true)} />}
            {userinfo && profilenav && <img src={tridown} alt="" width='13px' onClick={() => setnav(false)} />}
          </div>
          {userinfo && profilenav && <div className="user-actions">
            <Link className="layout-link" to='profile2' onClick={() => setnav(false)}>Profile</Link>
            <Link className="layout-link" onClick={() => {setnav(false),localStorage.removeItem('token'), navigate("/login"), setrefresh(!refresh)} }>Switchuser</Link>
            <Link className="layout-link" onClick={() => { setnav(false), localStorage.removeItem('token'), navigate("/tutorial1"), setrefresh(!refresh) }}>Signout</Link>
          </div>}
        </div>


        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>


      </nav>
      <div className="hamburger">

        {isOpen && <div className={!isOpen ? "nav-bar-mobile" : 'nav-bar-mobile-true'}>
          {!localStorage.getItem("token") && <Link className=" login-button" to='/login' style={{}} onClick={() => setOpen(false)}>Login</Link>}
          {!localStorage.getItem("token") && <Link className=" login-button" to='/signup' onClick={() => setOpen(false)}>SignUp</Link>}
          {localStorage.getItem("token") && <Link onClick={() => setOpen(false)} className="layout-link" to={"/profile"}><img id="layout-user" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2ZPWtUQRSGHxNdiaZQxEpIndhpq6CNJloIJkgKg4VoERQtoiR+INFGC8mfkGisxcq/EPwKiPErWgQLCwUXRaO54cB7YVgkubOz7owyDwwsd89575mvO2dmIJP5Z6gBw8A94CVQV7Hfd/Wf2STNMeAdUKxR3gJDJEgnMOUE+hg4C/QBm1X69OyJY3dbvskwpcC+AyeBdavYdgCnZFtWJpnhVADfgD0efnudygwSmZozJ6wnfDkt3zexPwDDzpywIeOL+TyVhvVsNGYUxJkAjXPSmCYi8wqiN0BjpzRsnYnGVwXRHaDRLQ3Tika5HqSi0zS5Ig3kHmkVeWilNrS+KIAtARpbpfGZiDxXELsCNHZLw9L7aEwriAsBGhelcYeIHFIQ8wFJ4ytpDBCRTqXgFsh4E/4T8n2dwk5xP7AM/PBsVbP9CfwG9pEIN9SyS8BoBftR2ZrPdRJj3GM9KO1ukSiFZ0WSpcgVSYzif+iR7c4h3VqU51nbSIwBYEHBPahg/9BZCPuJTA0YAWadoWJnVDsq+PYALxy/WWnVaCM2HC4Bi04gH4ExYKOHzibgKvDJ0VmU9l8dctZa5509SJks2rOuAF2r/AlgztG1o6HJQN0/crDh3uORnq126u6LafVLu3zPB+Bwq15wRYldoVZrx+Q8ADzTO5fVO0FMSuwXcK3NqXYHcNlJLm82K3RErbGkU/dYDCrdt1iONjOxFwI2TK1mTLG89/1EH5ejTfANxGe9LlALrTeVuS8n2zCltnmb8XEqax89fWhIg8prusrUK9yVxyp1n4oUiZdMJoMfK+YhJaCnoLnkAAAAAElFTkSuQmCC" width='30px' /></Link>}
          {localStorage.getItem("token") &&<Link className="layout-link" to={"/home"} onClick={() => setOpen(false)}>Home</Link>}
          {localStorage.getItem("token") &&<Link className="layout-link" to={"/profile2"} onClick={() => setOpen(false)}><div className="logo">Profile</div></Link>}
          {localStorage.getItem("token") &&<Link className="layout-link" to={"/login"} onClick={() => {setOpen(false),localStorage.removeItem("token")}}><div className="logo">switchUser</div></Link>}
          {localStorage.getItem("token") &&<Link className="layout-link" to={"/tutorial1"} onClick={() => {setOpen(false),localStorage.removeItem("token")}}><div className="logo">Sighout</div></Link>}
         
        </div>}
      </div>
      <Outlet className="Outlet" />
      <footer>
        <div className="layout-icon">
        <a href="#"> <img className="icon-footer"  width="32" height="32" src={facebook} alt="facebook--v1"/> </a>       
        <a href="#"> <img className="icon-footer" width="32" height="32" src={instagram} alt="instagram--v1"/> </a> 
        <a href="#"> <img className="icon-footer" width="32" height="32" src={tiktok} alt="tiktok--v1"/> </a> 
        <a href="#"> <img className="icon-footer" width="32" height="32" src={snapchat} alt="snapchat"/> </a> 
        </div>
        <div className="fast-links"> <Link to="home"> Home</Link><p>Service</p><p>About</p><p>Terms</p><p>Privaty policy</p></div>
        <div className="made-by"><img width="20" height="20" src="https://img.icons8.com/wired/64/copyright.png" alt="copyright"/><p>made by the badass team</p></div>
      </footer>
    </>
  );
};

export default Layout;


{/* <Link className="layout-link" to={"/home"}>
          <img
             id="layout-user"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/home--v1.png"
            alt="home--v1"
          />
        </Link> */}
{/* <Link className="layout-link" to={"/about"}>
          About Us

        </Link>
        <Link className="layout-link" to={"/chat"}>

        </Link> */}
{/* <Link className="layout-link" to={"/contactUs"}>

          Let's chat!
        </Link> */}