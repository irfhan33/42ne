import React, { useState } from "react";
import styled from "styled-components";
import { HeaderItem, HeaderLinks } from "./HeaderItem";
import Logo from "./../Logo/Logo";

const Header = () => {
  const [offset, setOffset] = useState(false);

  const toggleOffset = () => {
    setOffset(!offset);
  };

  return (
    <Container>
      <Logo />
      <HeaderLinks offset={offset ? 1 : 0}>
        <HeaderItem>Home</HeaderItem>
        <HeaderItem>Services</HeaderItem>
        <HeaderItem>Portfolio</HeaderItem>
        <HeaderItem>About Us</HeaderItem>
        <HeaderItem>Contact Us</HeaderItem>
        <CloseIcon onClick={toggleOffset} src="/assets/close-icon.svg" />
      </HeaderLinks>
      <MenuIcon src="/assets/menu-icon.svg" onClick={toggleOffset} />
    </Container>
  );
};

export default Header;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  margin-top: 20px;
`;

const MenuIcon = styled.img`
  height: 20px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled.img`
  display: none;
  max-width: 30px;
  position: absolute;
  right: 5%;
  @media (max-width: 768px) {
    display: block;
  }
`;
