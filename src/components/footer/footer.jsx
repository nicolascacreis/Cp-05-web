import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SocialIcons = styled.div`
  margin: 10px 0;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: #f39c12; /* Cor ao passar o mouse */
    }
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 GourmetOn. Todos os direitos reservados.</FooterText>
      <SocialIcons>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
