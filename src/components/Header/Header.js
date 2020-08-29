import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Wrapper>Erica Walsh</Wrapper>
    </header>
  );
};

const Wrapper = styled.h1`
  font-family: "Neuton", serif;
  font-weight: 300;
  font-size: 14vw;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  display: block;
`;

export default Header;
