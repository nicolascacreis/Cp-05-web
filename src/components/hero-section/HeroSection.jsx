// src/components/Slider.jsx
import { useState } from "react";
import heroImg1 from "../img/hero-img.jpg";
import heroImg2 from "../img/hero-img2.jpg";
import heroImg3 from "../img/hero-img.jpg";
import {
  SliderContainer,
  List,
  SlideImage,
  Dots,
  Dot,
  Overlay,
  TextContainer,
} from "./StyledHeroSection";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: heroImg1,
      title: "Descubra o Sabor com GourmetOn! 🍽️",
      description:
        "No GourmetOn, sua fome encontra conveniência! Explore uma variedade de pratos deliciosos de restaurantes locais, entregues diretamente na sua porta.",
    },
    {
      image: heroImg2,
      title: "Delícias em Cada Entrega! 🚚",
      description:
        "Nossos entregadores garantem que suas refeições cheguem quentes e frescas. Aproveite a experiência GourmetOn!",
    },
    {
      image: heroImg3,
      title: "Variedade de Opções! 🍕🍣",
      description:
        "Explore uma vasta seleção de pratos, desde pizzas até sushi, tudo em um só lugar.",
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      <List currentIndex={currentIndex}>
        {slides.map((slide, index) => (
          <div key={index} style={{ width: "100%", position: "relative" }}>
            {" "}
            {/* Alterado minWidth para width */}
            <SlideImage src={slide.image} alt={`Slide ${index + 1}`} />
            <Overlay>
              <TextContainer>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </TextContainer>
            </Overlay>
          </div>
        ))}
      </List>
      <Dots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)} // Navegação direta para o slide
          />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default Slider;
