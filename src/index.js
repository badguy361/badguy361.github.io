// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MyComponent from './move';
import Filled from './filled';
import Transition from './transition';
import Colorbox from './color_box';
import Flip from './flip';
import './assets/index.css'
import MainPage from './mainpage';
import { Navbar, HomePage } from './pages';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <HomePage />
    <MainPage />
    <MyComponent />
    <Filled />
    <Transition />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Flip />
    <Colorbox />
    <div id='activity1'></div>
  </BrowserRouter>
  
);

reportWebVitals();