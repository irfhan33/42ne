import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Button from "./../Button/Button";

const Contact = () => {
  return (
    <Container>
      <Left>
        <img src="/assets/contact-us.jpg" alt="contact us image" />
      </Left>
      <Right>
        <Title small lightgray>
          Want to start work with us?
        </Title>
        <Title lightgray>Fill in the form to get in touch with us.</Title>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Give us a short brief" />
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
    gap: 40px;
    margin-top: 20px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightdark};
    padding: 10px 5px;
    font-size: 16px;

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
    }
  }
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
