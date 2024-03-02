// /src/pages.js

import React from 'react';
import scrollToAnchor from './scroll_anchor';
import styles from "./assets/css/styles.module.css";
import { Button } from 'react-bootstrap';

const Navbar = () => {
  return(
    <header id={styles.header}>
      <div class="d-flex flex-column">

        <div class="profile">
          <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"/>
          <h1 class="text-light"><Button variant="link" className={styles.navbar} >Joey</Button></h1>
          <div class="social-links mt-3 text-center">
            <Button variant="link" className={styles.navbar} id="github"><i class="bx bxl-github"></i>github</Button>
            <Button variant="link" className={styles.navbar} id="facebook"><i class="bx bxl-facebook"></i>facebook</Button>
            <Button variant="link" className={styles.navbar} id="linkedin"><i class="bx bxl-linkedin"></i>linkedin</Button>
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