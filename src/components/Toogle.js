import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Toogle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Toggle onClick={() => setToggle(!toggle)}>
      <span>On</span>
      <span>Off</span>
      <Switch toggle={toggle} />
    </Toggle>
  );
};

export default Toogle;

const Toggle = styled.button`
  background: white;
  color: #07151f;
  font-weight: bold;
  font-size: 12px;
  padding: 6px 10px;
  display: flex;
  position: relative;
  cursor: pointer;
  border: none;

  span:not(:first-child) {
    margin-left: 10px;
    width: 30px;
    text-align: right;
  }
`;

const Switch = styled.div`
  width: 40px;
  position: absolute;
  background: ${({ theme }) => theme.colors.blue};
  height: 100%;
  top: 0;
  left: ${({ toggle }) => (!toggle ? "0px" : "auto")};
  right: ${({ toggle }) => (toggle ? "0px" : "auto")};
`;
