import React from "react";
import styled from "styled-components";
import Logo from "./../Logo/Logo";
import Title from "./../Title/Title";
import SocialMediaItem from "./../SocialMediaItem/SocialMediaItem";

const Footer = () => {
  return (
    <>
      <Container>
        <Logo />
        <Middle>
          <Links>
            <Title small medium>
              About Us
            </Title>
            <Title small medium>
              Contact Us
            </Title>
          </Links>
        </Middle>
        <SocialMedia>
          <SocialMediaItem src="/assets/facebook-icon.svg" />
          <SocialMediaItem src="/assets/twitter-icon.svg" />
          <SocialMediaItem src="/assets/youtube-icon.svg" />
          <SocialMediaItem src="/assets/instagram-icon.svg" />
        </SocialMedia>
      </Container>
      <Copyright>2021 All Rights Reserved.</Copyright>
    </>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.lightdark};
  align-items: center;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Links = styled.div`
  display: flex;
  gap: 34px;
  white-space: nowrap;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
`;

const Copyright = styled.p`
  text-align: center;
  padding-bottom: 30px;
  font-size: 16px;
`;
