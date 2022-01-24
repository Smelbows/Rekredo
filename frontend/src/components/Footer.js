import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  font-family: 'Lora', serif;
  width: 100vw;
  background-color: #546d64;
  border: 1px solid black;
  justify-content: center;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavLink to="/">Go home</NavLink>
      <p>Hi this is a footer</p>
    </FooterContainer>
  );
};

export default Footer;
