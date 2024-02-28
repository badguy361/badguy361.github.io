// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './move';
import Filled from './filled';
import Transition from './transition';
import Colorbox from './color_box';
import Flip from './flip';
import './assets/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <MyComponent />
    <Filled />
    <Transition />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Flip />
    <Colorbox />
  </BrowserRouter>

);

reportWebVitals();