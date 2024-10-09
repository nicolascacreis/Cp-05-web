// src/components/Slider.jsx
import { useState } from "react";
import heroImg1 from "../img/hero-img.jpg";
import heroImg2 from "../img/hero-img2.jpg";
import heroImg3 from "../img/hero-img3.jpg";
import {
  SliderContainer,
  List,
  SlideImage,
  Dots,
  Dot,
  Overlay,
  TextContainer,
  Button, // Adicionando o botão ao import
} from "./StyledHeroSection";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: heroImg1,
      title: "GourmetOn - O Sabor Chega Até Você! 🍽️",
      description:
        "No GourmetOn, sua fome encontra conveniência! Explore uma variedade de pratos deliciosos de restaurantes locais, entregues diretamente na sua porta.",
      buttonText: "Saiba mais",
    },
    {
      image: heroImg2,
      title: "Baixe o GourmetOn e Tenha o Mundo Gourmet na Palma da Mão! 📱",
      description:
        "Com o GourmetOn, você transforma cada refeição em uma experiência deliciosa, sem sair de casa. Explore uma variedade de pratos de restaurantes locais, faça pedidos com facilidade e aproveite promoções exclusivas. Baixe agora o app e tenha acesso a um mundo gourmet na palma da sua mão. A refeição perfeita está a apenas um toque de distância!",
      buttonText: "Baixe o App", // Texto do botão
    },
    {
      image: heroImg3,
      title: "Variedade de Opções! 🍕🍣",
      description:
        "Explore uma vasta seleção de pratos, desde pizzas até sushi, tudo em um só lugar.",
      buttonText: "Explore Opções", // Texto do botão
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer id="Slider">
      <List currentIndex={currentIndex}>
        {slides.map((slide, index) => (
          <div key={index} style={{ width: "100%", position: "relative" }}>
            <SlideImage src={slide.image} alt={`Slide ${index + 1}`} />
            <Overlay>
              <TextContainer>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                {/* Adicionando o botão */}
                <Button>{slide.buttonText}</Button>
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
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default Slider;
