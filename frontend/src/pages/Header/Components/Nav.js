import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Logout } from 'pages/Footer/Components/Logout';
import './Nav.css';
import NavSwitcher from './NavSwitcher';

const Pages = styled(NavLink)`
  text-decoration: none;
  /* font-family: 'Montserrat', sans-serif; */
  display: flex;
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

const Nav = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {isMobile && (
        <>
          <Menu right>
            <Pages to="/account">Account</Pages>
            <Pages to="/products">Products</Pages>
            <Pages to="/faq">FAQ</Pages>
            <Pages to="/contact">Contact</Pages>
            <Pages to="/checkout">Checkout</Pages>
          </Menu>
          <Logout />
        </>
      )}
      {!isMobile && (
        <>
          <NavSection>
            <Pages to="/account">Account</Pages>
            <Pages to="/products">Products</Pages>
            <Pages to="/faq">FAQ</Pages>
            <Pages to="/contact">Contact</Pages>
            <Pages to="/checkout">Checkout</Pages>
          </NavSection>
          <NavSwitcher />
        </>
      )}
    </>
  );
};

export default Nav;
