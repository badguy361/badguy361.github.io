import { Button, Image} from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { React } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import scrollToAnchor from './scroll_anchor';
import myself from './assets/img/myself.jpg'
import Flip from './flip';
import './assets/css/style.css';
import 'boxicons/css/boxicons.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return(
    <>
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
              <li className="bx bx-message-dots"><Button variant="link" onClick={() => scrollToAnchor('contact')}><span>Contact</span></Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>iPortfolio</span></strong>
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
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
            <Flip></Flip>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Data Analyst. &amp; Web Developer.</h3>
              <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
              </p>
              <div className="row">
              <div className="col-lg-6">
                  <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0975341915</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>台灣</span></li>
                  </ul>
              </div>
              <div className="col-lg-6">
                  <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>碩士</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>t1616joey1@gmail.com</span></li>
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
    <section id="resume" className="resume">
      <main id="main">
      <div className="container">

          <div className="section-title">
          <h2>簡歷(Resume)</h2>
          <p>HI, 我是中央大學碩士二年級的學生，目前有接網站開發任務，如有需求歡迎聯繫。</p>
          </div>

          <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">學歷</h3>
              <div className="resume-item">
              <h4>國立中央大學地球物理所</h4>
              <h5>2022/08 - 2024/07</h5>
              <p><em>Techs : Git · Sklearn · Pytorch · Github Action · Docker</em></p>
              <h6>Project : AI 地震衰減式</h6>
              <p>利用機器學習模型建構地震衰減式，並結合可解釋AI分析討論模型成效，對比於傳統使用方法預測效果可提升50%。</p>
              </div>
              <div className="resume-item">
              <h4>國立中央大學地球科學學系</h4>
              <h5>2018/08 - 2022/07</h5>
              <p><em>Techs : Git · Django · IOT · HTML · CSS · Javascript</em></p>
              <h6>Project : 即時監測宿舍浴設備使用情況系統</h6>
              <p>與中大宿服組合作，架設IOT設備於宿舍公共衛浴設備建構一套即時監測網站系統，可供宿民即時得知當前設備使用狀況。</p>
              <h6>Award : 2022中央大學社會創新競賽特優</h6>
              </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">工作經歷</h3>
              <div className="resume-item">
              <h4>中央大學圖書館網管</h4>
              <h5>2022/09 - Present</h5>
              <p><em>Techs : Mariadb · PHP · Apache · Dojo.js · HTML · CSS </em></p>
              <ul>
                  <li>管理圖書館內部網站</li>
                  <li>內部網站webserver、ssl、sql建置</li>
                  <li>增修內部網站功能，自動化處理每日繁瑣事務</li>
              </ul>
              </div>
              <div className="resume-item">
              <h4>新創公司網站建置</h4>
              <h5>2022/07 - 2022/08</h5>
              <p><em>Techs : Git · Python · CI/CD · Django · Azure · SQL · cPanel · JavaScript · HTML · CSS</em></p>
              <ul>
                  <li>從0建置新創公司頁面</li>
                  <li>前端頁面設計、google地圖串接、資料庫建立、雲端伺服器管理</li>
                  <li>增修內部網站功能，依需求建構新功能</li>
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
    <section id="contact" className="contact">
      <main id="main">
      <div className="container">

          <div className="section-title">
          <h2>聯絡我</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
              <div className="address">
                  <i className='bx bx-current-location' ></i>
                  <h4>地點:</h4>
                  <p>新北市、台北市、桃園市</p>
              </div>

              <div className="email">
                  <i class='bx bx-envelope' ></i>
                  <h4>Email:</h4>
                  <p>t1616joey1@gmail.com</p>
              </div>

              <div className="phone">
                  <i class='bx bx-phone' ></i>
                  <h4>Call:</h4>
                  <p>+886 975 341 915</p>
              </div>
              </div>
          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <Map></Map>
          </div>

          </div>

      </div>
      </main>
    </section>
    )
};

const Map = () => {
  const libraries = ['places'];
  const mapContainerStyle = {
    width: '40vw',
    height: '40vh',
  };
  const center = {
    lat: 24.93,
    lng: 121.37, 
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAA-nLUpzL-m_ty-EM4Tii7ZJNejoid3Jw',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export { Navbar, HomePage, AboutPage, ResumePage, ContactPage};