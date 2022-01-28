import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { SmallButton } from '../styledElements/Buttons';
import Logo from '../images/RekRedo.png';
import Background from '../images/camera.png';

// font-family: 'Lora', serif;
// font-family: 'Montserrat', sans-serif;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  border: 1px solid black;
  justify-content: space-around;
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.1em;
  padding-right: 1em;
  font-family: 'Lora', serif;
  background-color: rgb(131, 159, 90, 0.7);
`;

// export const Logo = styled.h1`
//   display: inline-block;
//   font-size: 40px;
//   color: black;
//   font-family: 'Montserrat', sans-serif;
// `;

const HeaderLogo = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`;

const LogoImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-top: 2rem;
`;

const Pages = styled(NavLink)`
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

const NavSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
`;

const NavButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 27vw;
`;

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderLogo>
        <LogoImg className='logo' src={Logo} alt='logo' />
      </HeaderLogo>
      <HeaderSection>
        <NavSection>
          <Pages to='/account'>Profile</Pages>
          <Pages to='/faq'>FAQ</Pages>
          <Pages to='/products'>Products</Pages>
          <Pages to='/contact'>Contact</Pages>
          <Pages to='/checkout'>Checkout</Pages>
          <Pages to='/'>Home</Pages>
        </NavSection>
        <NavButton>
          <SmallButton onClick={() => navigate('/register')}>
            Register
          </SmallButton>
          <SmallButton onClick={() => navigate('/log-in')}>Log in</SmallButton>
        </NavButton>

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
