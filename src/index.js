import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';
import {Navbar, HomePage, AboutPage, ResumePage, ContactPage} from './pages';
import {ScrollAnimate, ScrollView} from './animate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar />
      <ScrollAnimate />
      <HomePage />
      <ScrollView position={200} content={<AboutPage />}/>
      <ScrollView position={200} content={<ResumePage />}/>
      <ScrollView position={200} content={<ContactPage />}/>
    </BrowserRouter>,

);

reportWebVitals();
