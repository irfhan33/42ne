import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
const Container = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  display: inline-block;
  padding: 15px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  transition: all 250ms;
  width: fit-content;
  border: none;
  &:hover {
    background: #4e6dba;
    &:after {
      margin-left: 25px;
    }
  }

  &:after {
    content: url("/assets/white-arrow.svg");
    transition: all 250ms;
    margin-left: 10px;
  }
`;
