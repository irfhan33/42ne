import React from "react";
import styled from "styled-components";

const SocialMediaItem = ({ src }) => {
  return <Container src={src} />;
};

export default SocialMediaItem;

const Container = styled.img`
  object-fit: contain;
  height: 20px;
  display: block;
  cursor: pointer;
`;
