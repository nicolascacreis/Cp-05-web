// src/StyledHeroSection.js
import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100vw; /* Ocupa 100% da largura da tela */
  height: 100vh; /* Ocupa 100% da altura da tela */
  position: relative;
  overflow: hidden;
`;

export const List = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
  transform: translateX(
    -${(props) => props.currentIndex * 100}%
  ); /* Mova com base no índice atual */
`;

export const SlideImage = styled.img`
  width: 100vw; /* Garante que a imagem ocupe 100% da largura */
  height: 100vh; /* Garante que a imagem ocupe 100% da altura */
  object-fit: cover; /* Faz com que a imagem cubra completamente o container */
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
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const Dot = styled.li`
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: #333;
    width: 15px;
  }
`;
