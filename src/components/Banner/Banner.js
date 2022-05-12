import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <BannerTitle>
        Advanced Innovative <br />
        <span>IT Solutions.</span>
      </BannerTitle>
      <BannerDetail>
        <SmallBubble src="/assets/bubble-small.svg" />
        <DetailWrapper>
          <BannerParagraph>
            42NE is an agency specialise in the web development & mobile app
            development & digital solutions.
          </BannerParagraph>
          <BannerCTA>Let’s create something together.</BannerCTA>
        </DetailWrapper>
      </BannerDetail>
      <BigBubble src="/assets/bubble.svg" />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  padding-top: 100px;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const BannerDetail = styled.div`
  display: flex;
  align-items: center;
`;

const DetailWrapper = styled.div``;

const BigBubble = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 34vw;

  @media (max-width: 768px) {
    top: 5vw;
  }
`;

const SmallBubble = styled.img`
  width: 500px;
  position: absolute;
  left: -160px;
  z-index: -1;
  top: 230px;
`;

const BannerTitle = styled.h1`
  font-weight: 900;
  font-size: 89px;
  line-height: 101px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 30px;

  span {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 768px) {
    line-height: 80px;
    font-size: 79px;
  }

  @media (max-width: 555px) {
    line-height: 60px;
    font-size: 59px;
  }
`;

const BannerParagraph = styled.p`
  max-width: 55%;
  margin-bottom: 34px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const BannerCTA = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  display: inline-block;
  user-select: none;

  &:after {
    content: url("/assets/arrow.svg");
    margin-left: 10px;
    transition: all 250ms;
  }

  &:hover {
    &:after {
      margin-left: 30px;
    }
  }

  @media (max-width: 470px) {
    font-size: 16px;
  }
`;
