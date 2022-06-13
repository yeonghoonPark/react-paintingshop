import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from './main';
import Shop from './shop';


function App() {
  let [zeroCount, setZeroCount] = useState(0);

  let slideMovement = () => {
    setInterval(() => {
      let slide = document.querySelectorAll('.slide');
      slide.forEach((_item, idx) => {
        slide[idx].classList.remove('active');
      })
      if (zeroCount > 2) {
        zeroCount = 0;
      }
      slide[zeroCount++].classList.add('active');
    }, 8000);
  }
  slideMovement();

  let toggleActive = (event) => {
    event.currentTarget.classList.toggle('active');
  }

  let navTmCall = (event) => {
    let navTm = document.querySelector('.nav-tm');
    navTm.classList.toggle('active');
    toggleActive(event);
  }

  let pageYOffsetScroll = () => {
    window.addEventListener('scroll', () => {
      let toTop = document.querySelector('.to-top');
      if (window.pageYOffset <= 0 || window.pageYOffset <= 700) {
        toTop.classList.remove('active');
      } else if (window.pageYOffset > 700) {
        toTop.classList.add('active');
      }
    });
  }
  pageYOffsetScroll();

  let toTop = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main navTmCall={navTmCall} toTop={toTop} />} />
          <Route path="/shop" element={<Shop navTmCall={navTmCall} toTop={toTop} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
