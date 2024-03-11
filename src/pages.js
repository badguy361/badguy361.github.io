// /src/pages.js

import React from 'react';
import scrollToAnchor from './scroll_anchor';
import { Button, Image} from 'react-bootstrap';
import profile from './assets/img/profile.jpg'
import myself from './assets/img/myself.jpg'
import './assets/css/style.css';
import 'boxicons/css/boxicons.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { TypeAnimation } from 'react-type-animation';


const Navbar = () => {
  return(
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <Image src={myself} roundedCircle/>
          <h1 className="text-light">Joey</h1>
          <div className="social-links mt-3 text-center">
            <a href="https://www.facebook.com/profile.php?id=100003916017459"><i className="bx bxl-facebook-circle bx-md"></i></a>
            <a href="https://github.com/badguy361"><i className="bx bxl-github bx-md"></i></a>
            <a href="https://www.linkedin.com/in/chih-yu-chang-21aa32267/"><i className="bx bxl-linkedin bx-md"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li className="bx bx-home"><Button variant="link" onClick={() => scrollToAnchor('hero')}><span>Home</span></Button></li>
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
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container">
        <h1>張智宇(Joey)</h1>
      </div>
      <TypeAnimation id="type_animation"
          sequence={[
            'Hello, I\'m Data Analyst.',
            1000,
            'Hello, I\'m Website Developer.',
            1000,
            'Hello, I\'m AI engineer.',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
    </section>
    )
};

const AboutPage = () => {
  return(
    <section id="about" className="about">
    <main id="main">
      <div className="container">

          <div className="section-title">
          <h2>關於我</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <Image id="myself" src={myself} rounded/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Data Analyst. &amp; Web Developer. &amp; AI engineer.</h3>
              <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
              </p>
              <div className="row">
              <div className="col-lg-6">
                  <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                  </ul>
              </div>
              <div className="col-lg-6">
                  <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
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

const ResumePage = () => {
  return(
    <section id="resume" class="resume">
      <main id="main">
      <div class="container">

          <div class="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
              <h4>Alex Smith</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
              </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
              </div>
              <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
              </div>
              <div class="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
              </div>
          </div>
          </div>

      </div>
      </main>
    </section>
    )
};

const ContactPage = () => {
  return(
    <section id="contact" class="contact">
      <main id="main">
      <div class="container">

          <div class="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div class="row" data-aos="fade-in">

          <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
              <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
              </div>

              <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
              </div>

              </div>

          </div>

          </div>

      </div>
      </main>
    </section>
    )
};

export { Navbar, HomePage, AboutPage, ResumePage, ContactPage};