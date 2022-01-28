import React from 'react';

import Cart from '../components/Cart';
import { Section } from '../styledElements/Card';
import { H1 } from '../styledElements/Texts';
const BusinessProfile = () => {
  return (
    <Section>
      <H1>Business Profile </H1>
      <Cart />
    </Section>
  );
};

export default BusinessProfile;
