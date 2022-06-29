import React, { useState } from "react";
import styled from "styled-components";
import Toogle from "./Toogle";

const CookieModal = ({ onClick }) => {
  const [preferences, setPreferences] = useState(false);

  return (
    <Container>
      <Box>
        {!preferences ? (
          <>
            <span>Your Choice regarding cookies on this website</span>
            <p>
              We use cookies to optimies site functionality and give you the
              best possible experience.
            </p>
            <Buttons>
              <BtnAccept onClick={onClick}>Accept</BtnAccept>
              <BtnPreference onClick={() => setPreferences(true)}>
                Cookie Preferences
              </BtnPreference>
            </Buttons>
          </>
        ) : (
          <>
            <span>This site uses cookies</span>
            <p>
              Some of these cookies are essential, while others help us to
              improve your experience by providing insights into how the site is
              being used.
            </p>
            <BtnAccept
              onClick={onClick}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Accept
            </BtnAccept>
            <Section>
              <span>Strictly necessary Cookies</span>
              <p>
                Strictly necessary cookies enable core functionality. The
                website cannot function properly without these cookies, and can
                only be disabled by changing your browser preferences
              </p>
            </Section>
            <Section>
              <SectionHeader>
                <span>Functionality Cookies</span>
                <Toogle />
              </SectionHeader>
              <p>
                Functionality cookies remember choices you make to improve your
                experience.
              </p>
            </Section>
            <Section>
              <SectionHeader>
                <span>Performance Cookies</span>
                <Toogle />
              </SectionHeader>
              <p>
                Performance cookies collect anonymous information on the pages
                visited.
              </p>
            </Section>
            <Section>
              <SectionHeader>
                <span>Advertising Cookies</span>
                <Toogle />
              </SectionHeader>
              <p>
                Advertising cookies are used to track visitors across websites.
                The intention is to display ads that are relevant and engaging
                for the individual user and thereby more valuable for publishers
                and third party advertisers.
              </p>
            </Section>
          </>
        )}
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
  padding: 5%;
  overflow-y: auto;
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

  @media (max-width: 768px) {
    padding: 20px;
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
  transition: all 250ms;

  &:hover {
    background: ${({ theme }) => theme.colors.lightblue};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const BtnPreference = styled(BtnAccept)`
  background: transparent;
  border: 1px solid white;
`;

const Section = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid white;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
