import React from 'react';
import styled from 'styled-components';

import Background from '../images/Background.jpg';

import { Main } from '../styledElements/Card';
import { H2 } from '../styledElements/Texts';

const HeroImg = styled.img`
  height: 70vh;
  width: 100vw;
  object-fit: cover;
`;
const HeroContainer = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  padding-bottom: 20px;
`;
const TextContainer = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  background-color: rgb(30, 30, 30, 0.5);

  // height: 200px;
  // width: 800px;
  /* top: 50%; */
`;

const Header = styled.h1`
  font-size: 10em;
  padding-bottom: 0px;
  margin-bottom: 10px;
  opacity: 0.8;
  color: var(--white);
`;

const Home = () => {
  return (
    <>
      <Main>
        <HeroContainer>
          <TextContainer>
            <Header className="hero-text"> REKREDO </Header>
            <H2 className="hero-text"> REKVISITA - ON DEMAND </H2>
          </TextContainer>
          <HeroImg src={Background} className="hero" alt="background" />
        </HeroContainer>
      </Main>
    </>
  );
};

export default Home;
