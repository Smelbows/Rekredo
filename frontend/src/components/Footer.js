import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderSection } from './Nav';
// import { Button } from '../styledElements/Buttons';
// import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../components/Logout';
import Logo from '../images/RekRedo.png';

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 10em;
  background-color: #546d64;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const LogoImg = styled.img`
  width: 100px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImg className="logo" src={Logo} alt="logo" />
      <HeaderSection>
        <NavLink to="/">Go home</NavLink>
        <p>Hi this is a footer</p>
      </HeaderSection>
      <Logout />
    </FooterContainer>
  );
};

export default Footer;
