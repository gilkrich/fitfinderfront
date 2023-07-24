import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import MainContext from './components/MainContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <React.StrictMode>
    <MainContext>
    <App />
    </MainContext>
  </React.StrictMode>
  </BrowserRouter>

)
