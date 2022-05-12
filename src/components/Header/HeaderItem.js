import React from "react";
import styled from "styled-components";

export const HeaderItem = ({ children }) => {
  return <HeaderItemStyled>{children}</HeaderItemStyled>;
};

export const HeaderLinks = ({ children, offset }) => {
  return <Container offset={offset}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  gap: 44px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ offset }) => (offset ? "0px" : "100%")};
    transition: all 250ms;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    overflow: scroll;
    flex-direction: column;
    padding: 30px 5%;
    background: linear-gradient(
      180deg,
      rgba(88, 122, 209, 1) 0%,
      rgba(255, 255, 255, 1) 100%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: 10;
  }
`;

const HeaderItemStyled = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 20px;
    color: white;
  }
`;
