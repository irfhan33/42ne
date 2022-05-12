import React from "react";
import styled from "styled-components";
import Hero from "./../components/Hero/Hero";
import ConnectWithUs from "./../components/ConnectWithUs/ConnectWithUs";
import WhatWeDo from "./../components/WhatWeDo/WhatWeDo";
import WhyUs from "./../components/WhyUs/WhyUs";
import OurWorks from "./../components/OurWorks/OurWorks";
import Testimonial from "./../components/Testimonial/Testimonial";
import Contact from "./../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Container>
      <Hero />
      <ConnectWithUs />
      <WhatWeDo />
      <WhyUs />
      <OurWorks />
      <Testimonial />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 0 5%;
`;
