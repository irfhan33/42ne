import React from "react";
import styled from "styled-components";

export const HeaderItem = ({ children }) => {
  return <HeaderItemStyled>{children}</HeaderItemStyled>;
};

export const HeaderLinks = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  gap: 44px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderItemStyled = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  white-space: nowrap;
`;
