import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Button } from '../styledElements/Buttons';
// import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../images/RekRedo.png';
import { Logout } from 'components/Logout';
import { P, H6 } from '../../styledElements/Texts';

const activeClassName = 'nav-item-active';

const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  &.${activeClassName} {
    color: black;
    text-decoration: none;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  font-family: var(--fonttwo);
  width: 100vw;
  background-color: #546d64;
  justify-content: center;
`;
export const SmallSection = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  padding: 1em;
  font-family: var(--fonttwo);
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  font-family: var(--fonttwo);
  width: 80vw;
  padding: 0em 1em;
  max-width: 1024px;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  font-family: var(--fonttwo);
`;
export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: var(--fonttwo);
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--fonttwo);
  width: 80vw;
`;
export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: var(--fonttwo);
  width: 80vw;
  max-width: 1024px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const LogoImg = styled.img`
  height: 150px;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0.3em;
`;
const ContactIcon = styled.img`
  width: 30px;
  height: 30px;
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
            <ContactDiv>
              <ContactIcon
                src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/ffffff/external-telephone-contact-us-kmg-design-detailed-outline-kmg-design.png"
                alt="telephone"
              />
              <P color="white">08 500 500 5002</P>
            </ContactDiv>
            <ContactDiv>
              <ContactIcon
                src="https://img.icons8.com/ios/50/ffffff/apple-mail.png"
                alt="mail"
              />
              <P color="white">info@rekredo.com</P>
            </ContactDiv>
            <IconDiv>
              <SocialIcon
                src="https://img.icons8.com/ios/40/ffffff/instagram-new--v1.png"
                alt="instagram"
              />
              <SocialIcon
                src="https://img.icons8.com/ios/40/ffffff/facebook-new.png"
                alt="Facebook"
              />
              <SocialIcon
                src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
                alt="Linkedin"
              />
            </IconDiv>
          </TextDiv>
          <TextDiv>
            <H6 paddingBottom="0.75em">REKREDO</H6>
            <StyledLink to="/">About us</StyledLink>
            <StyledLink to="/faq">FAQ</StyledLink>
          </TextDiv>
          <TextDiv>
            <H6 paddingBottom="0.75em">HOW TO</H6>
            <StyledLink to="/products">Products</StyledLink>
            <StyledLink to="/Checkout">Checkout</StyledLink>
          </TextDiv>{' '}
          <TextDiv>
            <H6 paddingBottom="0.75em">CONTACT</H6>
            <StyledLink to="/contact">Contact form</StyledLink>
            <StyledLink to="/faq">FAQ</StyledLink>
          </TextDiv>
        </TopSection>
        <BottomSection>
          <P color="white">
            © REKREDO is a application built by{' '}
            <a href="https://github.com/jakobxlindstrom">Jakob Lindström</a>,{' '}
            <a href="https://github.com/smelbows">Sarah Mottram</a> and{' '}
            <a href="https://github.com/loulunds">Lousanne Lundström</a>
          </P>
          <SmallSection>
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-chatbot-online-shopping-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              alt="chat"
            />
          </SmallSection>
        </BottomSection>
      </HeaderSection>
    </FooterContainer>
  );
};

export default Footer;
