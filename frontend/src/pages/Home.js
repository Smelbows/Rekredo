import React from 'react';
import styled from 'styled-components';

import Background from '../images/Background.jpg';

import { Main } from '../styledElements/Card';

const HeroImg = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const Home = () => {
  return (
    <>
      <Main>
        <HeroImg src={Background} alt="background" />
      </Main>
    </>
  );
};

export default Home;
