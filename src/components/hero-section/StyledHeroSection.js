import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden; /* Impede a rolagem lateral */
  max-width: 100%;
  height: 100vh; /* Altura total da tela */
`;

export const List = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100%; /* Garante que a lista ocupe 100% da altura */
  transform: translateX(
    -${(props) => props.currentIndex * 100}%
  ); /* Muda a posição com base no índice do slide */
`;

export const SlideImage = styled.img`
  width: 100vw; /* Largura total da tela */
  height: 100vh; /* Altura total da tela */
  object-fit: cover; /* Cobre a área do slide */
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
  background-color: #bbb; /* Cor padrão */
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: #717171; /* Cor para o dot ativo */
    width: 20px; /* Aumenta a largura do dot ativo */
    height: 20px; /* Aumenta a altura do dot ativo */
  }

  &:hover {
    background-color: red; /* Cor ao passar o mouse */
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
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  color: white;
  text-align: center;
`;

export const TextContainer = styled.div`
  max-width: 600px; /* Largura máxima para o texto */
  padding: 20px; /* Espaçamento interno */
`;
