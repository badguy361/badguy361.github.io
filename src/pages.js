// /src/pages.js

import React from 'react';
import scrollToAnchor from './scroll_anchor';
import { Button, Image} from 'react-bootstrap';
import profile from './assets/img/profile.jpg'
import './assets/css/style.css';
import 'boxicons/css/boxicons.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return(
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <Image src={profile} roundedCircle/>
          <h1 className="text-light">Joey</h1>
          <div className="social-links mt-3 text-center">
            <a href="https://www.facebook.com/profile.php?id=100003916017459"><i className="bx bxl-facebook-circle bx-md"></i></a>
            <a href="https://github.com/badguy361"><i className="bx bxl-github bx-md"></i></a>
            <a href="https://www.linkedin.com/in/chih-yu-chang-21aa32267/"><i className="bx bxl-linkedin bx-md"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li className="bx bx-home"><Button variant="link" onClick={() => scrollToAnchor('home')}><span>Home</span></Button></li>
            <br></br>
            <li className="bx bx-notepad"><Button variant="link" onClick={() => scrollToAnchor('resume')}><span>Resume</span></Button></li>
            <br></br>
            <li className="bx bx-code-block"><Button variant="link" onClick={() => scrollToAnchor('portfolio')}><span>Portfolio</span></Button></li>
            <br></br>
            <li className="bx bx-message-dots"><Button variant="link" onClick={() => scrollToAnchor('contact')}><span>Contact</span></Button></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export { Navbar };