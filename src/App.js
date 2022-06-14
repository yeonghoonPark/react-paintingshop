import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
