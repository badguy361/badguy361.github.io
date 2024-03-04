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

const HomePage = () => {
  return(
      <section id="about" class="about">
      <main id="main">
        <div class="container">

            <div class="section-title">
            <h2>About</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
                <img src="assets/img/profile-img.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
                </p>
                <div class="row">
                <div class="col-lg-6">
                    <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                </div>
                </div>
                <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
            </div>
            </div>

        </div>
      </main>
      </section>
    )
};

export { Navbar, HomePage};