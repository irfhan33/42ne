import React, { useState } from "react";
import styled from "styled-components";
import { HeaderItem, HeaderLinks } from "./HeaderItem";
import Logo from "./../Logo/Logo";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [offset, setOffset] = useState(false);

  const toggleOffset = () => {
    setOffset(!offset);
  };

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks offset={offset ? 1 : 0}>
        <HeaderItem>Home</HeaderItem>
        <HeaderItem>Services</HeaderItem>
        <HeaderItem>Portfolio</HeaderItem>
        <HeaderItem>About Us</HeaderItem>

        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <HeaderItem>Contact Us</HeaderItem>
        </ScrollLink>
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
  height: 90px;
  align-items: center;
  padding: 20px 5%;
  position: sticky;
  top: 0;
  background: white;
  z-index: 300;
  margin: 0 -5%;
  transition: all 250ms;
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
