import React from "react";
import styled from "styled-components";
import Title from "./../Title/Title";
import Button from "./../Button/Button";
import { WhatWeDoContainer, WhatWeDoItem } from "./../WhatWeDo/WhatWeDoItem";

const WhyUs = () => {
  return (
    <Container>
      <Information>
        <Left>
          <img src="/assets/why-us.jpg" alt="Why Us" />
        </Left>
        <Right>
          <Title>Why Us</Title>
          <WhyUsParagraph>
            We Develop high quality and affordable web solutions that enable
            clients to establish presence online, increase profitability, and
            continually improve productivity. <br />
            <br /> We are committed to satisfying our customers. We believe in
            listening to the customers, satisfying needs, and understanding
            their expectations. We strive to exceed those expectations in price,
            quality, and on time delivery.
          </WhyUsParagraph>
          <Button>Connect with Us</Button>
        </Right>
      </Information>
      <WhatWeDoContainer>
        <WhatWeDoItem
          img="/assets/whyus-1.jpg"
          title="Industry knowledge"
          paragraph="We have massive experience in
          web & mobile development."
        />
        <WhatWeDoItem
          img="/assets/whyus-2.jpg"
          title="Focus on the results"
          paragraph="We deliver products that are
          focused on getting you results."
        />
        <WhatWeDoItem
          img="/assets/whyus-3.jpg"
          title="Continuous support"
          paragraph="We provide excellent tech support to improve product whenever needed."
        />
      </WhatWeDoContainer>
    </Container>
  );
};

export default WhyUs;

const Container = styled.div`
  margin-bottom: 100px;
`;

const Information = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 45%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0px;
    height: 30px;
    width: 100%;
    z-index: 10;
    background-image: url("/assets/contact-us-element.svg");
    background-repeat: no-repeat;
    background-position: top right;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 55%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WhyUsParagraph = styled.p`
  margin-top: 17px;
  margin-bottom: 38px;
`;
