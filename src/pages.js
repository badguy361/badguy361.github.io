// /src/pages.js

import React from 'react';
import scrollToAnchor from './scroll_anchor';
import { Button, Image} from 'react-bootstrap';
import styles from "./assets/css/styles.module.css";
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
            <i className="bx bxl-facebook-circle bx-md"></i>
            <i className="bx bxl-github bx-md"></i>
            <i className="bx bxl-linkedin bx-md"></i>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><Button variant="link" className={styles.navbar} onClick={() => scrollToAnchor('home')}><span>Home</span></Button></li>
            <li><Button variant="link" className={styles.navbar} onClick={() => scrollToAnchor('about')}><span>About</span></Button></li>
            <li><Button variant="link" className={styles.navbar} onClick={() => scrollToAnchor('resume')}><span>Resume</span></Button></li>
            <li><Button variant="link" className={styles.navbar} onClick={() => scrollToAnchor('portfolio')}><span>Portfolio</span></Button></li>
            <li><Button variant="link" className={styles.navbar} onClick={() => scrollToAnchor('services')}><span>Services</span></Button></li>
            <li><Button variant="link" className={styles.navbar} onClick={() => scrollToAnchor('contact')}><span>Contact</span></Button></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export { Navbar };