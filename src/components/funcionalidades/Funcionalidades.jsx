import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faBowlFood,
  faUtensils,
  faEgg,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif !important;
  }
`;

const WorkSectionWrapper = styled.div`
  margin-top: 15rem;
`;

const WorkSectionBottom = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const WorkSectionInfo = styled.div`
  width: 290px;
  min-height: 350px;
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  color: #505050;
  margin: 1rem 2rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0px 16px #fe9e0d;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  p {
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
  }
`;

// Componente
const Work = () => {
  const workInfoData = [
    {
      image: <FontAwesomeIcon icon={faBurger} size="8x" color="orange" />,
      title: "Busca Personalizada",
      text: "Encontre seu prato favorito em segundos! Busque por tipo de comida, ingredientes ou pratos específicos e descubra novas delícias.",
    },
    {
      image: <FontAwesomeIcon icon={faBowlFood} size="8x" color="orange" />,
      title: "Filtros Avançados",
      text: "Refine sua busca com nossos filtros práticos. Selecione por preço, popularidade, avaliações ou tempo de entrega e encontre exatamente o que deseja.",
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} size="8x" color="orange" />,
      title: "Avaliações e Comentários",
      text: "Ajude outros usuários a escolherem o que comer. Deixe seu feedback sobre pratos e restaurantes que você ama!",
    },
    {
      image: <FontAwesomeIcon icon={faEgg} size="8x" color="orange" />,
      title: "Suporte ao Cliente 24/7",
      text: "Nosso time de atendimento está disponível a qualquer hora para resolver suas dúvidas e garantir sua satisfação.",
    },
    {
      image: <FontAwesomeIcon icon={faPepperHot} size="8x" color="orange" />,
      title: "Histórico de Pedidos",
      text: "Nunca mais perca suas comidas favoritas! Visualize rapidamente seus pedidos anteriores e repita-os com um clique.",
    },
  ];

  return (
    <WorkSectionWrapper id="Funcionalidades">
      <GlobalStyle />
      <WorkSectionBottom>
        {workInfoData.map((data) => (
          <WorkSectionInfo key={data.title}>
            <div className="info-boxes-img-container">{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </WorkSectionInfo>
        ))}
      </WorkSectionBottom>
    </WorkSectionWrapper>
  );
};

export default Work;
