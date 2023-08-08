import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Layout from "./Layout";
import Home from "./Home/Home";
import Tutorial1 from "../components/Tutorial/Tutorial1";
import Tutorial2 from "../components/Tutorial/Tutorial2";
import Tutorial3 from "../components/Tutorial/Tutorial3";
import About from "./AboutUs/About";
import Chat from "./Chat/Chat";
import SizesCalculator from "./SizesCalculator/SizesCalculator";
import Profile2 from "./Profile2";
import StylistPage from "./StylistPage";
import StylistHomePage from "./StylistHomePage";
import SizeByStyle from "./SizeByStyle";
import SizeClacPage from "./SizeCalcPage/SizeClacPage";
import BodyTypes from "./bodyTypes/bodyTypes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="tutorial1" element={<Tutorial1 />}></Route>
          <Route path="tutorial2" element={<Tutorial2 />}></Route>
          <Route path="tutorial3" element={<Tutorial3 />}></Route>
          <Route path="sizescalculator" element={<SizesCalculator />}></Route>
          <Route path="profile2" element={<Profile2 />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="chat" element={<Chat />}></Route>
          <Route path="stylehome" element={<StylistHomePage />}></Route>
          <Route path="stylesecond" element={<StylistPage />}></Route>
          <Route path="stylesthird" element={<SizeByStyle />}></Route>
          <Route path="sizecalcpage" element={<SizeClacPage />}></Route>
          <Route path="bodytypesgraph" element={<BodyTypes />}></Route>
          <Route path="stylethird/:genid/:id" element={<SizeByStyle />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;

