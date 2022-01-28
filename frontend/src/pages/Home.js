import React from 'react';

import Background from '../images/Background.jpg';

import { Main } from '../styledElements/Card';

const Home = () => {
  return (
    <>
      <Main>
        <img className="background" src={Background} alt="background" />
      </Main>
    </>
  );
};

export default Home;
