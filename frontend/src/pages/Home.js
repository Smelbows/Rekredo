import React from 'react';

import Nav from '../components/Nav';
import Background from '../images/Background.jpg';

import { BigSection } from '../components/Card';

const Home = () => {
  return (
    <>
      <Nav />
      <BigSection>
        <img className="background" src={Background} alt="background" />
      </BigSection>
    </>
  );
};

export default Home;
