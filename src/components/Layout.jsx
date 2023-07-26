
import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import "../components/Layout.css";
import { useContext } from "react";
import { Context } from "./MainContext";

const Layout = () => {
     
  let {userinfo} = useContext(Context)
  console.log(userinfo);

  return (
    <>
      <nav className="top-nav">
         <div className="logo-side">
          <h1>logo</h1>
         </div>
          
        <div className="middle-nav">
        <Link className="layout-link" to='/homepage'>Home</Link>
        <Link className="layout-link" to={"/home"}><div className="logo">fitfinder</div></Link> 
        <Link className="layout-link" to={"/home"}><div className="logo">fitfinder</div></Link> 
        <Link className="layout-link" to={"/home"}><div className="logo">fitfinder</div></Link> 
        </div>
      
      <div className="login-side">
        {!userinfo&&<Link className="layout-link login-button" to='/'>Login</Link>}
        {!userinfo&&<Link className="layout-link sign-button"  to='/signup'>SignUp</Link>}
        {userinfo&&<Link className="layout-link" to={"/profile"}><img id="layout-user" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2ZPWtUQRSGHxNdiaZQxEpIndhpq6CNJloIJkgKg4VoERQtoiR+INFGC8mfkGisxcq/EPwKiPErWgQLCwUXRaO54cB7YVgkubOz7owyDwwsd89575mvO2dmIJP5Z6gBw8A94CVQV7Hfd/Wf2STNMeAdUKxR3gJDJEgnMOUE+hg4C/QBm1X69OyJY3dbvskwpcC+AyeBdavYdgCnZFtWJpnhVADfgD0efnudygwSmZozJ6wnfDkt3zexPwDDzpywIeOL+TyVhvVsNGYUxJkAjXPSmCYi8wqiN0BjpzRsnYnGVwXRHaDRLQ3Tika5HqSi0zS5Ig3kHmkVeWilNrS+KIAtARpbpfGZiDxXELsCNHZLw9L7aEwriAsBGhelcYeIHFIQ8wFJ4ytpDBCRTqXgFsh4E/4T8n2dwk5xP7AM/PBsVbP9CfwG9pEIN9SyS8BoBftR2ZrPdRJj3GM9KO1ukSiFZ0WSpcgVSYzif+iR7c4h3VqU51nbSIwBYEHBPahg/9BZCPuJTA0YAWadoWJnVDsq+PYALxy/WWnVaCM2HC4Bi04gH4ExYKOHzibgKvDJ0VmU9l8dctZa5509SJks2rOuAF2r/AlgztG1o6HJQN0/crDh3uORnq126u6LafVLu3zPB+Bwq15wRYldoVZrx+Q8ADzTO5fVO0FMSuwXcK3NqXYHcNlJLm82K3RErbGkU/dYDCrdt1iONjOxFwI2TK1mTLG89/1EH5ejTfANxGe9LlALrTeVuS8n2zCltnmb8XEqax89fWhIg8prusrUK9yVxyp1n4oUiZdMJoMfK+YhJaCnoLnkAAAAAElFTkSuQmCC" width='30px'/></Link>}
      </div>
      </nav>


      <Outlet className="Outlet" />
      <footer></footer>
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