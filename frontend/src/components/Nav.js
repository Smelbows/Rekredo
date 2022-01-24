import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SmallButton } from './Buttons';

// font-family: 'Lora', serif;
// font-family: 'Montserrat', sans-serif;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: #546d64;
  border: 1px solid black;
  justify-content: space-between;
`;
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em;
  font-family: 'Lora', serif;
`;

export const Logo = styled.h1`
  display: inline-block;
  font-size: 40px;
  color: black;
  font-family: 'Montserrat', sans-serif;
`;

export const Pages = styled.a`
  display: flex;
  font-size: 1rem;
  padding: 0.5em;
`;

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderSection>
        <SmallButton>Register</SmallButton>
      </HeaderSection>
      <HeaderSection>
        <Logo>REKREDO</Logo>
      </HeaderSection>
      <HeaderSection>
        <Pages onClick={() => navigate('/Account')}>Profile</Pages>
        <Pages onClick={() => navigate('/Faq')}>FAQ</Pages>
        <Pages onClick={() => navigate('/Products')}>Products</Pages>
        <Pages onClick={() => navigate('/Contact')}>Contact</Pages>
        <Pages onClick={() => navigate('/')}>Home</Pages>
      </HeaderSection>
    </Header>
  );
};

export default Nav;
