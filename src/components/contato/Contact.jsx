import styled from "styled-components";
import "./Contato.css";

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 6rem 0rem;
`;

const FormContainer = styled.div`
  background-color: white;
  max-width: 700px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 3rem;

  @media (max-width: 800px) {
    padding: 0.5rem !important;
    border-radius: 1rem !important;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 1rem !important;
    padding: 0.5rem 1rem !important;
    margin-bottom: 0.8rem !important;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  background-color: #fe9e0d;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e48f0f;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
    cursor: pointer;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <h1 className="primeiro-heading">Precisa de ajuda?</h1>
      <h1 className="segundo-heading">Deixe a gente ajudar você!</h1>
      <FormContainer>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Telefone" required />
        <Button>Enviar</Button>
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;
