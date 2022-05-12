import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import { WhatWeDoContainer, WhatWeDoItem } from "./WhatWeDoItem";

const WhatWeDo = () => {
  return (
    <Container>
      <Title>What we do</Title>
      <WhatWeDoContainer>
        <WhatWeDoItem
          img="/assets/whatwedo-1.jpg"
          title="Website & Interactive"
          paragraph="We use custom technological
          solutions for website & web app development"
        />
        <WhatWeDoItem
          img="/assets/whatwedo-3.jpg"
          title="Mobile App Development"
          paragraph="We are experts in native & cross
          platforms mobile & tablet application development."
        />
        <WhatWeDoItem
          img="/assets/whatwedo-2.jpg"
          title="SEO & Social Media Advertisements"
          paragraph="We attract search traffic through SEO & social media ads and convert into your customers."
        />
      </WhatWeDoContainer>
    </Container>
  );
};

export default WhatWeDo;

const Container = styled.div`
  margin-bottom: 100px;
`;
