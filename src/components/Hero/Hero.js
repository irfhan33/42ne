import React from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";

const Hero = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  margin-bottom: 100px;
`;
