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
// const AccordionDiv = styled.div`
//   max-width: 600px;
//   margin: 2rem auto;
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   border: 1px solid black;
// `;

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
  // const accordionData1 = [
  //   {
  //     title: 'Section 1',
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`,
  //   },
  //   {
  //     title: 'Section 2',
  //     content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //     Repudiandae, mollitia id reprehenderit a ab odit!`,
  //   },
  //   {
  //     title: 'Section 3',
  //     content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //     dolor ut sequi minus iste? Quas?`,
  //   },
  // ];

  // const accordionData2 = [
  //   {
  //     title: 'Section 1',
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`,
  //   },
  //   {
  //     title: 'Section 2',
  //     content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //     Repudiandae, mollitia id reprehenderit a ab odit!`,
  //   },
  //   {
  //     title: 'Section 3',
  //     content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //     dolor ut sequi minus iste? Quas?`,
  //   },
  // ];

  // const accordionData3 = [
  //   {
  //     title: 'Section 1',
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`,
  //   },
  //   {
  //     title: 'Section 2',
  //     content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //     Repudiandae, mollitia id reprehenderit a ab odit!`,
  //   },
  //   {
  //     title: 'Section 3',
  //     content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //     dolor ut sequi minus iste? Quas?`,
  //   },
  // ];
  return (
    <MiddleContainer>
      <AccordionSection
        text="Questions Rekredo"
        image={images[0]}
        accordionData={accordionData1}
      />
      <AccordionSection
        text="Business users"
        image={images[1]}
        accordionData={accordionData2}
      />
      <AccordionSection
        text="Personal Users"
        image={images[2]}
        accordionData={accordionData3}
      />
    </MiddleContainer>
  );
};

export default Faq;
