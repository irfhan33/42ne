import React from "react";
import styled from "styled-components";

const CookieModal = ({ cookie, onClick }) => {
  return (
    <Container>
      <Box>
        <span>Your Choice regarding cookies on this website</span>
        <p>
          We use cookies to optimies site functionality and give you the best
          possible experience.
        </p>
        <Buttons>
          <BtnAccept onClick={onClick}>Accept</BtnAccept>
          <BtnPreference onClick={onClick}>Cookie Preferences</BtnPreference>
        </Buttons>
      </Box>
    </Container>
  );
};

export default CookieModal;

const Container = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99999;
  display: grid;
  place-items: center;
`;

const Box = styled.div`
  background: #07151f;
  color: white;
  max-width: 500px;
  border-radius: 16px;
  padding: 50px;

  span {
    font-weight: bold;
  }

  p {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const BtnAccept = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 14px;
  color: white;
  background: ${({ theme }) => theme.colors.blue};
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
`;

const BtnPreference = styled(BtnAccept)`
  background: transparent;
  border: 1px solid white;
`;
