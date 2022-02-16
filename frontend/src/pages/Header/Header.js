import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/RekRedo.png';
// import Background from '../images/camera.png';

import Nav from './Components/Nav';

const HeaderBox = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  height: 7rem;
  position: relative;
  @media (min-width: 768px) {
    height: 12rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1em;
  font-family: var(--fonttwo);
  /* width: 70vw; */
  @media (max-width: 400px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: flex-end;
  }
`;

const HeaderLogo = styled.div`
  width: 50vw;
  display: grid;
  place-items: center;
  @media (min-width: 768px) {
    width: 30vw;
  }
`;

const LogoImg = styled.img`
  width: 8rem;
  @media (min-width: 768px) {
    /* height: 12rem;
    width: 20rem; */
    object-fit: cover;
  }
`;

const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
      </HeaderLogo>
      <HeaderSection>
        <Nav />
      </HeaderSection>
    </HeaderBox>
  );
};

export default Header;
