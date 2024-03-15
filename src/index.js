// /src/index.js
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/index.css'
import MyComponent from './move';
import Filled from './filled';
import Transition from './transition';
import Colorbox from './color_box';
import Flip from './flip';
import { Navbar, HomePage, AboutPage , ResumePage , ContactPage} from './pages';
import { ScrollAnimate, ScrollView } from './animate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <ScrollAnimate />
    <HomePage />
    <ScrollView position={200} content={<AboutPage />}/>
    <ScrollView position={200} content={<ResumePage />}/>
    <ScrollView position={200} content={<ContactPage />}/>
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