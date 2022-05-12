import React from "react";
import styled from "styled-components";
import Title from "./../Title/Title";
import { TestimonialList, TestimonialListContainer } from "./TestimonialList";

const Testimonial = () => {
  return (
    <Container>
      <Title>Client testimonials</Title>
      <TestimonialListContainer>
        <TestimonialList
          content="“It is almost 2 months since I am working with 42NE
            now. I must say that 42NE is one of the best teams
            I have worked with. They are reachable, available
            and eager to share their knowledge at the right spot”"
          name="John Doe, Italy"
          avatar="/assets/profile.jpg"
          active
        />
        <TestimonialList
          content="“It is almost 2 months since I am working with 42NE
          now. I must say that 42NE is one of the best teams
          I have worked with. They are reachable, available
          and eager to share their knowledge at the right spot”"
          avatar="/assets/profile.jpg"
          name="John Doe, Italy"
        />
      </TestimonialListContainer>
    </Container>
  );
};

export default Testimonial;

const Container = styled.div`
  margin-bottom: 100px;
`;
