import React from "react";
import styled from "styled-components";

const SocialMediaItem = ({ src }) => {
  return (
    <Container>
      <Icon src={src} />
    </Container>
  );
};

export default SocialMediaItem;

const Icon = styled.img`
  object-fit: contain;
  height: 20px;
  display: block;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(233deg)
    brightness(102%) contrast(101%);
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  transition: all 250ms;

  &:hover {
    background: transparent;

    ${Icon} {
      filter: invert(68%) sepia(47%) saturate(6727%) hue-rotate(203deg)
        brightness(87%) contrast(87%);
    }
  }
`;
