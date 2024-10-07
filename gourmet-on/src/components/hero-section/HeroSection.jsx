// src/Slider.jsx
import { useState } from "react";
import "./StyledHeroSection";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "../img/hero-img.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <div className="list">
        {images.map((src, index) => (
          <div
            className="item"
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <ul className="dots">
        {images.map((_, index) => (
          <li
            key={index}
            className={index === currentIndex ? "active" : ""}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
