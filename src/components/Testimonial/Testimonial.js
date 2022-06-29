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
          content="“42ne has completely surpassed our expectations. It really saves me time and effort. 42ne is exactly what our business has been lacking.”"
          name="Dale, United States"
          avatar="/assets/testimonial-profile-1.jpg"
          active
        />
        <TestimonialList
          content="“It is almost 2 months since I am working with 42NE
          now. I must say that 42NE is one of the best teams
          I have worked with. They are reachable, available
          and eager to share their knowledge at the right spot”"
          avatar="/assets/testimonial-profile-2.jpg"
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
