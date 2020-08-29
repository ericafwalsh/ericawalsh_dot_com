import React from "react";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>{theme === "light" ? `🌘` : `🌔`}</Button>
  );
};

const Button = styled.div`
  cursor: pointer;
  padding: 0.6rem;
  margin: 20px 60px 0 0;
  position: absolute;
  top: 0;
  right: 0;
`;

export default Toggle;
