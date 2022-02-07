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

@media (max-width: 500px){
    flex-direction: row;
  }
`;
export const SmallSection = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  padding: 1em;
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
  font-family: 'Lora', serif;
  width: 90vw;
  padding: 0em 10 em;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  padding: 1em;
  font-family: 'Lora', serif;
`;
export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1em;
  font-family: 'Lora', serif;
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
  font-family: 'Lora', serif;
  width: 100vw;
`;
export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: 'Lora', serif;
  width: 90vw;
  @media (max-width: 500px){
    font-size: 10px;
  }
`;

const LogoImg = styled.img`
  width: 100px;
`;

const SocialIcon = styled.img `
width: 20px;
height: 20px;

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
            <IconDiv>
            <SocialIcon alt="X"/>
            <SocialIcon alt="X"/>
            <SocialIcon alt="X"/>
            </IconDiv>
          </TextDiv>
          <TextDiv>
            <H3>REKREDO</H3>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">FAQ</NavLink>
          </TextDiv>
          <TextDiv>
            <H3>HOW TO</H3>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">FAQ</NavLink>
          </TextDiv>{' '}
          <TextDiv>
            <H3>CONTACT</H3>
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
