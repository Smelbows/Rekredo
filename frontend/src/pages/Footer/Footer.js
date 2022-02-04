import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Button } from '../styledElements/Buttons';
// import { useSelector, useDispatch } from 'react-redux';
import { Logout } from './Components/Logout';
import Logo from '../../images/RekRedo.png';
import { P, H3, H4 } from '../../styledElements/Texts';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  font-family: 'Lora', serif;
  width: 100vw;
  padding: 1em;
  background-color: #546d64;
  justify-content: center;
`;
export const SmallSection = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  padding: 1em;
  border: 1px solid white;
  font-family: 'Lora', serif;
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin: 1em 0em 0em 0em;
  padding: 1px;
  border: 1px solid white;
  font-family: 'Lora', serif;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  padding: 1em;
  border: 1px solid white;
  font-family: 'Lora', serif;
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4em;
  border: 1px solid black;
  font-family: 'Lora', serif;
  width: 100vw;
`;
export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  font-family: 'Lora', serif;
  width: 80vw;
`;

const LogoImg = styled.img`
  width: 100px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <HeaderSection>
        <TopSection>
          <LogoImg className="logo" src={Logo} alt="logo" />
          <Logout />
        </TopSection>
        <TopSection>
          <TextDiv>
            <H4>Telephone ICON 0704028282</H4>
            <H4>info@rekredo.com</H4>
            <img className="social-icon" alt="twitter"></img>
            <img className="social-icon" alt="twitter"></img>
            <img className="social-icon" alt="twitter"></img>
          </TextDiv>
          <TextDiv>
            <H3>Rekredo</H3>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">FAQ</NavLink>
          </TextDiv>
          <TextDiv>
            <H3>Rekredo</H3>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">FAQ</NavLink>
          </TextDiv>{' '}
          <TextDiv>
            <H3>Rekredo</H3>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">FAQ</NavLink>
          </TextDiv>
        </TopSection>
      </HeaderSection>
      <BottomSection>
        <P>
          © REKREDO AB Org. nr: 999999-6666. Stockholmsgatan 99, 199 99
          Stockholm
        </P>
        <SmallSection>
          <NavLink to="/">ChatICON</NavLink>
        </SmallSection>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
