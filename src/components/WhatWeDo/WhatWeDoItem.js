import React from "react";
import styled from "styled-components";
import Title from "./../Title/Title";

export const WhatWeDoContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export const WhatWeDoItem = ({ img, title, paragraph }) => {
  return (
    <Item>
      <img src={img} alt="What We Do Item" />
      <Title small>{title}</Title>
      <p>{paragraph}</p>
    </Item>
  );
};

const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 100px;

  @media (max-width: 768px) {
    grid-gap: 50px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    height: 100%;
    max-height: 120px;
    object-fit: contain;
    width: fit-content;
  }
`;
