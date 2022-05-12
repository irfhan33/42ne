import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

export const TestimonialList = ({ content, name, active, avatar }) => {
  return (
    <List active={active}>
      <TestimonialParagraph>{content}</TestimonialParagraph>
      <UserInformation>
        <UserProfile src={avatar} />
        <TestimonialName active={active}>{name}</TestimonialName>
      </UserInformation>
    </List>
  );
};

export const TestimonialListContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 32px;
  gap: 36px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const TestimonialParagraph = styled.p``;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 43px;
`;

const UserProfile = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 70px;
`;

const List = styled.div`
  background: #d9e7fc;
  border-radius: 0px 20px 20px 20px;
  padding: 30px;
  position: relative;

  ${(props) =>
    props.active &&
    css`
      background: #587ad1;
      color: white;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -28px;
        background: #587ad1;
        width: 30px;
        height: 40px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 48% 49%);
      }

      @media (max-width: 768px) {
        &:before {
          width: 14px;
          left: -12px;
          height: 20px;
        }
      }
    `}
`;

const TestimonialName = styled.h3`
  font-size: 18px;
  font-weight: 700;

  ${(props) =>
    props.active &&
    css`
      font-size: 24px;
    `}
`;
