import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { SmallButton } from '../styledElements/Buttons';

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
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.1em;
  padding-right: 1em;
  font-family: 'Lora', serif;
`;

export const Logo = styled.h1`
  display: inline-block;
  font-size: 40px;
  color: black;
  font-family: 'Montserrat', sans-serif;
`;

export const Pages = styled(NavLink)`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  font-size: 1rem;
  padding: 0.5em;
  color: black;
  &.${(props) => props.activeClassName} {
    color: grey;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderSection>
        <SmallButton onClick={() => navigate('/register')}>Register</SmallButton>
        <SmallButton onClick={() => navigate('/log-in')}>Log in</SmallButton>
      </HeaderSection>
      <HeaderSection>
        <Logo>REKREDO</Logo>
      </HeaderSection>
      <HeaderSection>
        <Pages to="/account">Profile</Pages>
        <Pages to="/faq">FAQ</Pages>
        <Pages to="/products">Products</Pages>
        <Pages to="/contact">Contact</Pages>
        <Pages to="/checkout">Checkout</Pages>
        <Pages to="/">Home</Pages>

        {/* <Pages onClick={() => navigate('/Account')}>Profile</Pages>
        <Pages onClick={() => navigate('/Faq')}>FAQ</Pages>
        <Pages onClick={() => navigate('/Products')}>Products</Pages>
        <Pages onClick={() => navigate('/Contact')}>Contact</Pages>
        <Pages onClick={() => navigate('/')}>Home</Pages> */}
      </HeaderSection>
    </Header>
  );
};

export default Nav;
