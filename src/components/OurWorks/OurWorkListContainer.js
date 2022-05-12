import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Button from "./../Button/Button";
import { Link } from "react-scroll";

export const OurWorkListContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export const OurWorkListItem = ({ img, title, subtitle }) => {
  return (
    <Item>
      <img src={img} alt="Our Work List Item" />
      <Title small>{title}</Title>
      <p>{subtitle}</p>
    </Item>
  );
};

export const OurWorkListButton = () => {
  return (
    <ButtonContainer>
      <ButtonParagraph>
        Interested in knowing more about us and our work? Please get in touch
        with us to take the discussion to the next stage.
      </ButtonParagraph>
      <Link to="contact" spy={true} smooth={true}>
        <Button>Connect with Us</Button>
      </Link>
    </ButtonContainer>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-row-gap: 35px;
  margin-top: 32px;
  grid-column-gap: 87px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 30px;
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Item = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 25px;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonParagraph = styled.p`
  max-width: 80%;
  margin-bottom: 30px;
`;
