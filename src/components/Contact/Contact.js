import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Button from "./../Button/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");

  const [nameValidation, setNameValidation] = useState("2");
  const [emailValidation, setEmailValidation] = useState("2");
  const [briefValidation, setBriefValidation] = useState("2");

  const sendMessage = (e) => {
    e.preventDefault();
    setNameValidation(!name ? 0 : 1);
    setEmailValidation(!email ? 0 : 1);
    setBriefValidation(!brief ? 0 : 1);
  };
  return (
    <Container id="contact">
      <Left>
        <img src="/assets/contact-us.jpg" alt="contact us image" />
      </Left>
      <Right>
        <Title small lightgray>
          Want to start work with us?
        </Title>
        <Title lightgray>Fill in the form to get in touch with us.</Title>
        <form action="" onSubmit={sendMessage}>
          <InputContainer>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              error={nameValidation ? 0 : 1}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Email"
              error={emailValidation ? 0 : 1}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Give us a short brief"
              error={briefValidation ? 0 : 1}
              onChange={(e) => setBrief(e.target.value)}
            />
          </InputContainer>
          <Button>Send Message</Button>
        </form>
      </Right>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding-top: 50px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 30px;
  }
`;

const InputContainer = styled.div``;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightdark};
  padding: 10px 5px;
  font-size: 16px;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }

  border-bottom: 2px solid ${({ error }) => error && "red"};
`;

const Left = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -77px;
    left: 0;
    height: 77px;
    width: 100%;
    z-index: 10;
    background-image: url("/assets/contact-us-element.svg");
    background-repeat: no-repeat;
    background-position: top;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    max-height: 400px;
    object-fit: cover;
    position: relative;
  }
`;

const Right = styled.div``;
