// src/components/Menu.jsx
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2em; /* Ajustado para evitar overflow */
  background-color: #333;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 10;
  box-sizing: border-box; /* Inclui padding na largura total */
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
    top: 60px; /* Altura do menu */
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

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
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
      <ToggleButton onClick={toggleMenu}>
        <Hamburger>
          <div />
          <div />
          <div />
        </Hamburger>
      </ToggleButton>
      <MenuItems isOpen={isOpen}>
        <MenuItem onClick={() => setIsOpen(false)}>Home</MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>Sobre</MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>Menu</MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>Contato</MenuItem>
      </MenuItems>
    </Nav>
  );
};

export default Menu;
