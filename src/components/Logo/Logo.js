import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoStyled src="/assets/42ne-logo.svg" alt="42ne logo" />;
};

export default Logo;

const LogoStyled = styled.img`
  height: 100%;
  max-height: 60px;
  cursor: pointer;
`;
