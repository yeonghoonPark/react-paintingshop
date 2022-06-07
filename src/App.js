import './App.css';
import './reset.css';
import slide01 from './images/slide01.jpg';
import slide02 from './images/slide02.jpg';
import slide03 from './images/slide03.jpg';
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
  // }, 10000);
  

  return (
    <div className="App">
      <BrowserRouter>
        <div className="skip-menu"></div>  
        <div className="wrap">
          {/* HEADER */}
          <header className="header">
            <div className="container">
              <h1 className="title"><Link to="/">PAINTING SHOP</Link></h1>
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
                  <div className="img-box">
                    <img src={slide01} alt="slide01" />
                  </div>
                </div>
                <div className="slide slide2">
                  <div className="img-box">
                    <img src={slide02} alt="slide02" />
                  </div>
                </div>
                <div className="slide slide3 active">
                  <div className="img-box">
                    <img src={slide03} alt="slide03" />
                  </div>
                </div>
            </div>
          </section>
          
          {/* PIECE */}
          <section className="piece">
            <div className="container">
              <h2 className="title">PIECE</h2>
              <article></article>
              <article className="watercolor">
                <h3 className="sub-title">Watercolor</h3>
              </article>
              <article className="oil">
                <h3 className="sub-title">Oil</h3>
              </article>
            </div>
          </section>
          
          <section className="contact-us">
            <div className="container">
              <h2 className="title">CONTACT-US</h2>
              <div className="contact">
                <div className="contents">
                  <h3 className="sub-title"></h3>
                  <div className="customer">
                    <ul>
                      <li><Link to="/">090-999-9999</Link></li>
                      <li><Link to="/">주문배송조회</Link></li>
                      <li><Link to="/">공지사항</Link></li>
                      <li><Link to="/">이용약관</Link></li>
                      <li><Link to="/">개인정보처리방침</Link></li>
                    </ul>
                  </div>
                  <div className="about">
                    <ul>
                      <li><Link to="/">PAINTING SHOP</Link></li>
                    </ul>
                  </div>
                  <div className="social">
                    <ul>
                      <li><Link to="/"><i className="fa-brands fa-youtube"></i></Link></li>
                      <li><Link to="/"><i className="fa-brands fa-facebook-square"></i></Link></li>
                      <li><Link to="/"><i className="fa-brands fa-twitter-square"></i></Link></li>
                      <li><Link to="/"><i className="fa-brands fa-instagram-square"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="container">
              <address className="address">2022 yeonghoon-Park, All Right Reserved</address>
            </div>
          </footer>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
