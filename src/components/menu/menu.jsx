import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffa41b;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: white;
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #333;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  div {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Nav>
      <Logo>GourmetOn</Logo>
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      <MenuItems isOpen={isOpen}>
        <MenuItem>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="menu"
            smooth={true}
            duration={500}
            href="../funcionalidades/funcionalidades.jsx"
          >
            Menu
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </MenuItem>
      </MenuItems>
    </Nav>
  );
};

export default Menu;
