import React from "react";
import styled from "styled-components";
import Logo from "./../Logo/Logo";
import SocialMediaItem from "./../SocialMediaItem/SocialMediaItem";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Middle>
          <Links>
            <LinkItem to="">About Us</LinkItem>
            <LinkItem to="">Contact Us</LinkItem>
            <LinkItem to="privacy-policy">Privacy Policy</LinkItem>
          </Links>
        </Middle>
        <SocialMedia>
          <SocialMediaItem src={"/assets/facebook-icon.svg"} />
          <SocialMediaItem src="/assets/twitter-icon.svg" />
          <SocialMediaItem src="/assets/youtube-icon.svg" />
          <SocialMediaItem src="/assets/instagram-icon.svg" />
        </SocialMedia>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.lightdark};
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;

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
  margin-left: 30px;
`;

const Links = styled.div`
  display: flex;
  gap: 34px;
  white-space: nowrap;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightdark};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

const Copyright = styled.p`
  text-align: center;
  padding-bottom: 30px;
  font-size: 16px;
`;
