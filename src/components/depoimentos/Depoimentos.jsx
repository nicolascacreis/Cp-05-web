import Profile from "./profile.jpg";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Depoimentos = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
  margin-top: 15rem;
  background-color: #f5f5f5;
  font-family: "Ubuntu", sans-serif;
`;

const ParteCima = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subtitulo = styled.p`
  text-align: center;
  max-width: 600px !important;
  font-weight: 700;
  color: #fe9e0d;
  font-size: 1.15rem;
`;

const Titulo = styled.h1`
  max-width: 700px !important;
  font-size: clamp(2rem, 5vw, 4rem);
  color: #4c4c4c;
  max-width: 600px;
`;

const Textos = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  max-width: 500px;
  color: #6a6a6a;
  margin: 1.5rem 0rem;
`;

const ParteBaixo = styled.div`
  margin-top: 2rem;
  background-color: white;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 750px;
  border-radius: 2rem;
  flex-direction: column;
  text-align: center;
  margin: 2rem auto;
  background-color: #ffffff;
`;

const Perfil = styled.img`
  max-width: 15%;
  height: auto;
  border-radius: 150px;
  border: 1px solid black;
`;

const Estrelas = styled.div`
  margin: 0rem 0.25rem;
  font-size: 1.5rem;
  color: #fe9e0d;
`;

const Nome = styled.h2`
  margin-top: 1.5rem;
`;

function SecDepoimentos() {
  return (
    <Depoimentos id="SecDepoimentos">
      <ParteCima>
        <Subtitulo> Depoimentos </Subtitulo>
        <Titulo>O que estão falando?</Titulo>
        <Textos>
          Nossas experiências são compartilhadas pelos nossos clientes! Descubra
          as perspectivas de quem já colaborou conosco e ouça o que eles têm a
          declarar.
        </Textos>
      </ParteCima>
      <ParteBaixo>
        <Perfil src={Profile} alt="Foto de Mia" />
        <Textos>
          {" "}
          ´Super recomendo! Tudo foi fornecido no tempo previsto e com a
          excelência que eu esperava. Eu não poderia estar mais contente!´
        </Textos>
        <Estrelas>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </Estrelas>
        <Nome>Mia</Nome>
      </ParteBaixo>
    </Depoimentos>
  );
}

export default SecDepoimentos;
