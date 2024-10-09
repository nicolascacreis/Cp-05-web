// src/components/StyledHeroSection.js
import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top: -10px;
  margin-left: -10px;
`;

export const List = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

export const SlideImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); // Ajuste a opacidade conforme necessário
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  text-align: center;
`;

export const TextContainer = styled.div`
  max-width: 600px; // Limite de largura para o texto
  padding: 20px; // Espaçamento interno
`;

export const Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  transform: translateY(-50%);
  z-index: 3; // Acima do overlay
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const Dots = styled.ul`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 3;
`;

export const Dot = styled.li`
  width: 15px;
  height: 15px;
  background-color: #fff;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: #333;
    width: 20px;
    height: 20px;
  }
`;
