import React from "react";
import styled from "styled-components";
import Title from "./../Title/Title";
import {
  OurWorkListButton,
  OurWorkListContainer,
  OurWorkListItem,
} from "./OurWorkListContainer";

const OurWorks = () => {
  return (
    <Container>
      <Title>Our Work</Title>
      <OurWorkListContainer>
        <OurWorkListItem
          img="/assets/ourwork-1.jpg"
          title="Esthetiqueiris"
          subtitle="Beauty institute website"
        />
        <OurWorkListItem
          img="/assets/ourwork-2.jpg"
          title="MGAD"
          subtitle="Interior design & architecture website"
        />
        <OurWorkListItem
          img="/assets/ourwork-3.jpg"
          title="Pizza italian academy UK"
          subtitle="Pizza chef training institute website"
        />
        <OurWorkListButton />
      </OurWorkListContainer>
    </Container>
  );
};

export default OurWorks;

const Container = styled.div`
  margin-bottom: 100px;
`;
