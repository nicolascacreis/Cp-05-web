// src/Slider.jsx
import { useState } from "react";

// Importando as imagens diretamente
import heroImg1 from "../img/hero-img.jpg";
import heroImg2 from "../img/hero-img.jpg";
import heroImg3 from "../img/hero-img.jpg";
import heroImg4 from "../img/hero-img.jpg";
import heroImg5 from "../img/hero-img.jpg";

import {
  SliderContainer,
  List,
  SlideImage,
  Buttons,
  Button,
  Dots,
  Dot,
} from "./StyledHeroSection";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imagens importadas diretamente
  const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <SliderContainer>
      <List currentIndex={currentIndex}>
        {images.map((src, index) => (
          <div key={index} style={{ minWidth: "100vw" }}>
            {" "}
            {/* Cada imagem deve ocupar toda a largura da tela */}
            <SlideImage src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </List>
      <Buttons>
        <Button id="prev" onClick={prevSlide}>
          &lt;
        </Button>
        <Button id="next" onClick={nextSlide}>
          &gt;
        </Button>
      </Buttons>
      <Dots>
        {images.map((_, index) => (
          <Dot
            key={index}
            className={index === currentIndex ? "active" : ""}
          ></Dot>
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default Slider;
