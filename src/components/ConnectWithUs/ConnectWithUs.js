import React from "react";
import styled from "styled-components";
import Title from "./../Title/Title";
import Button from "./../Button/Button";

const ConnectWithUs = () => {
  return (
    <Container>
      <Left>
        <Title>
          Ambitious. Passionate. Restless. We are eager to grow your business.
        </Title>
        <ConnectWithUsParagraph>
          We live our values each day; our commitment to our clients’ growth is
          whar drive us. We are here to help you grow, grow faster. Get in touch
          with us to know more.
        </ConnectWithUsParagraph>
        <Button>Connect With Us</Button>
      </Left>
      <Right>
        <img src="/assets/team.svg" alt="" />
      </Right>
    </Container>
  );
};

export default ConnectWithUs;
const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 100px;

  @media (max-width: 768px) {
    gap: 30px;
    flex-direction: column-reverse;
  }
`;

const ConnectWithUsParagraph = styled.p`
  margin-top: 15px;
  margin-bottom: 25px;
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled(Left)`
  width: 50%;
  text-align: right;
  user-select: none;

  img {
    width: 100%;
    max-width: 450px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      margin: 0 auto;
      display: block;
    }
  }
`;
