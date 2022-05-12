import React from "react";
import styled from "styled-components";

const Title = ({ children, small, lightgray, medium }) => {
  return (
    <Container small={small} lightgray={lightgray} medium={medium}>
      {children}
    </Container>
  );
};

export default Title;

const Container = styled.div`
  color: ${({ theme, lightgray }) =>
    lightgray ? theme.colors.lightdark : theme.colors.dark};
  font-weight: ${({ medium }) => (medium ? "500" : "700")};
  font-size: ${({ small }) => (small ? "18px" : "24px")};
  line-height: 32px;
`;
