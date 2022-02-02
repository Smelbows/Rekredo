import React from 'react';
import styled from 'styled-components';
import ImageCarousel from '../components/ImageCarousel';

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
const CarouselContainer = styled.div`
  display: grid;
  /* place-items: center; */
  padding-bottom: 20px;
  width: 100vw;
  height: 100vh;
`;
const TextContainer = styled.div`
  display: grid;
  place-items: center;

  position: absolute;
  background-color: rgb(30, 30, 30, 0.5);
  z-index: 1;
  top: 30%;

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
        {' '}
        <TextContainer>
          <Header className="hero-text"> REKREDO </Header>
          <H2 className="hero-text"> REKVISITA - ON DEMAND </H2>
        </TextContainer>
        <CarouselContainer>
          <ImageCarousel />
        </CarouselContainer>
      </Main>
    </>
  );
};

export default Home;
