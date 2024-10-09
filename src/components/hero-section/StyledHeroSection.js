import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  margin-left: -10px;
`;

export const List = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

export const SlideImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: #717171;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #717171;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
`;

export const TextContainer = styled.div`
  max-width: 600px;
  padding: 20px;
`;

// Adicionando o estilo do botão
export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fe9e0d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    background-color: #ff4500;
  }
`;
