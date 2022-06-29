import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "./../components/Hero/Hero";
import ConnectWithUs from "./../components/ConnectWithUs/ConnectWithUs";
import WhatWeDo from "./../components/WhatWeDo/WhatWeDo";
import WhyUs from "./../components/WhyUs/WhyUs";
import OurWorks from "./../components/OurWorks/OurWorks";
import Testimonial from "./../components/Testimonial/Testimonial";
import Contact from "./../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CookieModal from "./../components/CookieModal";

const Home = () => {
  const [cookie, setCookie] = useState(false);

  const turnOffCookie = () => {
    setCookie(false);
  };

  useEffect(() => {
    const turnOnCookie = setTimeout(() => {
      setCookie(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <Header />
      <Hero />
      <ConnectWithUs />
      <WhatWeDo />
      <WhyUs />
      <OurWorks />
      <Testimonial />
      <Contact />
      <Footer />
      {cookie && <CookieModal onClick={turnOffCookie} />}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 0 5%;
  position: relative;
`;
