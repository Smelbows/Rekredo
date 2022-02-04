import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/RekRedo.png';
// import Background from '../images/camera.png';

import Nav from './Components/Nav'

const HeaderBox = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  height: 10rem;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1em;
  font-family: 'Lora', serif;
  width: 70vw; 
`;


const HeaderLogo = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
    justify-content: center;

    @media(min-width: 768px) {
        width: 30vw;
    }
`;

const LogoImg = styled.img`
    width: 9rem;
    height: 9rem;
   @media (min-width: 768px) {
        width: 15rem;
        height: 15rem;
        margin-top: 1rem;
   }
`;

const Header = () => {
    return (
        <HeaderBox>
            <HeaderLogo>

                <Link to='/'><LogoImg className="logo" src={Logo} alt="logo" /></Link>
            </HeaderLogo>
            <HeaderSection>
                <Nav />
            </HeaderSection>
        </HeaderBox>
    )
};

export default Header;

// background - image: url(${ Background });