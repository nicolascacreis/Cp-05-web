import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BGLeft from "../img/bg-left.png";
import BGRight from "../img/bg-right.png";
import ApresentacaoImagem from "../img/apresentacao-imagem.png";

const AppContainer = styled.div`
  min-height: 100vh;
  width: 85vw;
  max-width: 1900px;
  margin: 0rem auto;
`;

const ApresentacaoContainer = styled.div`
  margin-top: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    margin-top: 5rem !important;
  }
`;

const BackgroundLeft = styled.div`
  position: absolute;
  left: -150px;
  z-index: -2;

  @media (max-width: 600px) {
    display: none;
  }
`;

const BackgroundRight = styled.div`
  position: absolute;
  bottom: 0px;
  right: -150px;
  z-index: -2;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  flex: 0.9;
  margin-right: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 400px;
    margin-right: 0 !important;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  align-items: start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;

const PrimaryTitulo = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  color: #222222;
  max-width: 600px;
  text-align: center;

  @media (max-width: 800px) {
    text-align: center;
    max-width: 90%;
  }
`;

const PrimarySubtitulo = styled.p`
  font-weight: 700;
  color: #fe9e0d;
  font-size: 1.15rem;
  text-align: center;
`;

const PrimaryText = styled.li`
  font-size: clamp(1rem, 3vw, 1.5rem);
  max-width: 500px;
  color: #444444;
  margin: 1.5rem 0rem;
  text-align: start;

  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SecondaryButton = styled.button`
  padding: 1rem 2.5rem;
  background-color: #fe9e0d;
  border: none;
  border-radius: 5rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background-color: #e48f0f;
  }

  svg {
    margin-left: 0.75rem;
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`;

const WatchVideoButton = styled.button`
  margin-left: 2rem;
  background-color: transparent;
  border: none;
  border-radius: 5rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  color: #484848;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  svg {
    font-size: 3rem;
    margin-right: 1rem;
  }

  &:hover {
    color: #222;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 1rem;
    font-size: 1rem;

    svg {
      margin-right: 0.5rem;
      font-size: 2rem;
    }
  }
`;

const Apresentacao = () => {
  return (
    <AppContainer id="Apresentacao">
      <ApresentacaoContainer>
        <BackgroundLeft>
          <img src={BGLeft} alt="Background Left" />
        </BackgroundLeft>
        <ImageContainer>
          <img src={ApresentacaoImagem} alt="Apresentacao" />
        </ImageContainer>
        <TextContainer>
          <PrimarySubtitulo>SOBRE NÓS</PrimarySubtitulo>
          <PrimaryTitulo>BENEFÍCIOS</PrimaryTitulo>
          <PrimaryText>Os melhores e mais eficientes entregadores.</PrimaryText>
          <PrimaryText>Ampla variedade de tipos de restaurante.</PrimaryText>
          <PrimaryText>
            Sistema de pagamento moderno, rápido e fácil.
          </PrimaryText>
          <ButtonContainer>
            <SecondaryButton>Saiba Mais</SecondaryButton>
            <WatchVideoButton>
              <BsFillPlayCircleFill /> Video de Apresentação
            </WatchVideoButton>
          </ButtonContainer>
        </TextContainer>
        <BackgroundRight>
          <img src={BGRight} alt="Background Right" />
        </BackgroundRight>
      </ApresentacaoContainer>
    </AppContainer>
  );
};

export default Apresentacao;
