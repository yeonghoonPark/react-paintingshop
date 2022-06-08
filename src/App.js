import './App.css';
import './reset.css';
import slide01 from './images/slide01.jpg';
import slide02 from './images/slide02.jpg';
import slide03 from './images/slide03.jpg';
import bannerWaterColor from './images/banner_watercolor.jpg';
import bannerOil from './images/banner_oil.jpg';
import hobby from './images/academy_hobby.jpg';
import major from './images/academy_major.jpg';
import releaseStress from './images/academy_release_stress.jpg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  // let slideCount = 0;
  // setInterval(() => {
  //   let slide = document.querySelectorAll('.slide');
  //   slide.forEach((_item, idx) => {
  //     slide[idx].classList.remove('active');
  //   })
  //   if (slideCount > 2) {
  //     slideCount = 0;
  //   }
  //   slide[slideCount++].classList.add('active');
  // }, 8000);
  

  return (
    <div className="App">
      <BrowserRouter>
        <div className="skip-menu"></div>  
        <div className="wrap">
          {/* HEADER */}
          <header className="header">
            <div className="container">
              <h1 className="main-title"><Link to="/">PAINTING SHOP</Link></h1>
              <nav className="nav">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/shop">Shop</Link></span>
                <span><Link to="/notice">Notice</Link></span>
              </nav>
            </div>
          </header>
          
          {/* SLIDER */}
          <section className="slider">
            <div className="container">
              <h2 className="title">SLIDER</h2>
              <div className="slide slide1">
                  <h3 className="sub-title">30% discount on Oil painting</h3>
                  <div className="img-box">
                    <img src={slide01} alt="slide01" />
                  </div>
                </div>
                <div className="slide slide2">
                  <h3 className="sub-title">Learn to be happy</h3>
                  <div className="img-box">
                    <img src={slide02} alt="slide02" />
                  </div>
                </div>
                <div className="slide slide3 active">
                <h3 className="sub-title">Welcome to Painting Shop</h3>
                <div className="img-box">
                    <img src={slide03} alt="slide03" />
                </div>
                </div>
            </div>
          </section>
          
          {/* PIECE */}
          <section className="piece">
            <div className="container">
              <h2 className="title"><span>PIECE</span></h2>
              <article className="watercolor">
                <h3 className="sub-title">Watercolor</h3>
                <div className="img-box">
                  <img src={bannerWaterColor} alt="banner_watercolor" />
                </div>
                <p className="text">
                  Watercolor is a type of paint that you can use to solve in water, or you can paint with it, so look at a variety of watercolors.
                </p>
                <button className="btn btn-watercolor"><Link to="/">Enjoying Watercolor Paintings</Link></button>
              </article>
              <article className="oil">
                <h3 className="sub-title">Oil</h3>
                <div className="img-box">
                  <img src={bannerOil} alt="banner_oil" />
                </div>
                <p className="text">
                  It is a method loved by artists even today because it can be painted using oil-based paint, painted several times, and expressed using a unique texture of paint.
                </p>
                <button className="btn btn-oil"><Link to="/">Enjoying Oil Paintings</Link></button>
              </article>
            </div>
          </section>

          {/* ACADEMY */}
          <section className="academy">
            <div className="container">
              <h2 className="title"><span>ACADEMY</span></h2>
              <article className="hobby">
                <h3 className="sub-title">Hobby</h3>
                <div className="img-box">
                  <img src={hobby} alt="hobby" />
                </div>
                <p className="text">
                  Drawing is a good hobby for you.
                </p>
              </article>
              <article className="major">
                <h3 className="sub-title">Major</h3>
                <div className="img-box">
                  <img src={major} alt="major" />
                </div>
                <p className="text">
                  Show your major by learning at our academy.
                </p>
              </article>
              <article className="release-stress">
                <h3 className="sub-title">Release stress</h3>
                <div className="img-box">
                  <img src={releaseStress} alt="release-stress" />
                </div>
                <p className="text">
                  Art relieves stress and becomes a vital part of life.
                </p>
              </article>
            </div>
          </section>
          
          {/* CONTACT-US */}
          <section className="contact-us">
            <div className="container">
              <h2 className="title"><span>CONTACT-US</span></h2>
              <div className="customer">
                <h3 className="sub-title">CUSTOMER</h3>
                <ul>
                  <li><Link to="/">090-999-9999</Link></li>
                  <li><Link to="/">Notice</Link></li>
                  <li><Link to="/">Terms of Service</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Order Delivery Inquiry</Link></li>
                </ul>
              </div>
              <div className="about">
                <h3 className="sub-title">ABOUT</h3>
                <ul>
                  <li><Link to="/">PAINTING SHOP</Link></li>
                  <li><Link to="/">ACADEMY</Link></li>
                </ul>
              </div>
              <div className="social">
                <h3 className="sub-title">SOCIAL</h3>
                <ul>
                  <li><Link to="/"><i className="fa-brands fa-youtube-square"></i></Link></li>
                  <li><Link to="/"><i className="fa-brands fa-facebook-square"></i></Link></li>
                  <li><Link to="/"><i className="fa-brands fa-twitter-square"></i></Link></li>
                  <li><Link to="/"><i className="fa-brands fa-instagram-square"></i></Link></li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="container">
              <address className="address">COPYRIGHTⓒ 2022 yeonghoon-Park, All Right Reserved</address>
            </div>
          </footer>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
