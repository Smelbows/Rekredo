import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderSection } from './Nav';

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 10em;
  background-color: #546d64;
  border: 1px solid black;
  justify-content: center;
  position: absolute;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <HeaderSection>
      <NavLink to="/">Go home</NavLink>
      <P>Hi this is a footer</P>
      </HeaderSection>
 
    </FooterContainer>
  );
};

export default Footer;
