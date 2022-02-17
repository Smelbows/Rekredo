// import react from 'react';
// import { Main } from '../styledElements/Card';
import styled from 'styled-components';

import AccordionSection from './Components/AccordionSection';
import { MiddleContainer } from '../../styledElements/Container';
// import Accordion from '../components/Accordion';
import { images } from '../Home/images';

import {
  accordionData1,
  accordionData2,
  accordionData3,
} from './accordionContent';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5em;
  width: 100vw;
  background: var(--saffron);
  & > .background {
    width: 100%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 100vw;
    padding: 1em;
  }
`;

const Faq = () => {
  return (
    <MiddleContainer>
      <AccordionSection
        text="Account questions"
        image={images[0]}
        accordionData={accordionData1}
      />
      <AccordionSection
        text="Uploading props"
        image={images[1]}
        accordionData={accordionData2}
      />
      <AccordionSection
        text="What roll does Rekredo play"
        image={images[2]}
        accordionData={accordionData3}
      />
    </MiddleContainer>
  );
};

export default Faq;
