import React from 'react';

import Background from '../images/Background.jpg';

import { BigSection } from '../components/Card';

const Home = () => {
  return (
    <>
      <BigSection>
        <img className="background" src={Background} alt="background" />
      </BigSection>
    </>
  );
};

export default Home;
