import React from "react";
import styled from "styled-components";
import { HeaderItem, HeaderLinks } from "./HeaderItem";
import Logo from "./../Logo/Logo";

const Header = () => {
  return (
    <Container>
      <Logo />
      <HeaderLinks>
        <HeaderItem>Home</HeaderItem>
        <HeaderItem>Services</HeaderItem>
        <HeaderItem>Portfolio</HeaderItem>
        <HeaderItem>About Us</HeaderItem>
        <HeaderItem>Contact Us</HeaderItem>
        <HeaderItem></HeaderItem>
      </HeaderLinks>
      <MenuIcon src="/assets/menu-icon.svg" />
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
