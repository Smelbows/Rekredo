// import react from 'react';
import { Main, BigSection } from '../styledElements/Card';
import styled from 'styled-components';

import Accordion from '../components/Accordion';

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
  ,
  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 100vw;
    padding: 1em;
  }
`;
export const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: var(--black);
  font-size: 2rem;
  max-width: 400px;
`;

const Faq = () => {
  const accordionData1 = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  const accordionData2 = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  const accordionData3 = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];
  return (
    <Main>
      <Section>
        <BigSection className="wrap">
          <H1>Question about products</H1>
          <div className="accordion">
            {accordionData1.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>
        </BigSection>
      </Section>
      <Section>
        <BigSection>
          <H1>Questions about sending and notification</H1>
          <div className="accordion">
            {accordionData2.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}{' '}
          </div>
        </BigSection>
      </Section>
      <Section>
        <BigSection>
          {' '}
          <H1>Question about getting paid </H1>
          <div className="accordion">
            {accordionData3.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}{' '}
          </div>
        </BigSection>
      </Section>
    </Main>
  );
};

export default Faq;
