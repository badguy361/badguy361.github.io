// /src/pages.js

import React from 'react';
import scrollToAnchor from './scroll_anchor';
import style from "./assets/css/style.css";

const Navbar = () => {
  return(
    <header id="header">
      <div class="d-flex flex-column">

        <div class="profile">
          <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"/>
          <h1 class="text-light"><a href="index.html">Joey</a></h1>
          <div class="social-links mt-3 text-center">
            <a href="javascript:void(0);" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="javascript:void(0);" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="javascript:void(0);" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="javascript:void(0);" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="javascript:void(0);" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><a href="javascript:void(0);" onClick={() => scrollToAnchor('home')}><span>Home</span></a></li>
            <li><a href="javascript:void(0);" onClick={() => scrollToAnchor('about')}><span>About</span></a></li>
            <li><a href="javascript:void(0);" onClick={() => scrollToAnchor('resume')}><span>Resume</span></a></li>
            <li><a href="javascript:void(0);" onClick={() => scrollToAnchor('portfolio')}><span>Portfolio</span></a></li>
            <li><a href="javascript:void(0);" onClick={() => scrollToAnchor('services')}><span>Services</span></a></li>
            <li><a href="javascript:void(0);" onClick={() => scrollToAnchor('contact')}><span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export { Navbar };