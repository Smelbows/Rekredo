import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../../styledElements/Buttons';
import './Nav.css'


const Pages = styled(NavLink)`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  font-size: 1.2em;
  padding: 0.5em;
  color: black;
  &.${(props) => props.activeClassName} {
    color: grey;
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
`;

const NavButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 15rem;
`;



const Nav = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const navigate = useNavigate();
  return (
    <>
      {isMobile && <Menu right><Pages to="/account">Account</Pages>
        <Pages to="/products">Products</Pages>
        <Pages to="/faq">FAQ</Pages>
        <Pages to="/contact">Contact</Pages>
        <Pages to="/checkout">Checkout</Pages></Menu>}
      {!isMobile && <><NavSection>
        <Pages to="/account">Account</Pages>
        <Pages to="/products">Products</Pages>
        <Pages to="/faq">FAQ</Pages>
        <Pages to="/contact">Contact</Pages>
        <Pages to="/checkout">Checkout</Pages>
      </NavSection>
        <NavButton>
          <Button propBtnColor='gray' onClick={() => navigate('/register')}>Register</Button>
          <Button propBtnColor='gray' onClick={() => navigate('/log-in')}>Log in</Button>
        </NavButton></>}
    </>
  );
};

export default Nav;
