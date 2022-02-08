import styled from 'styled-components';

import Accordion from './Accordion';

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 10em;
  align-items: center;
  width: 100vw;
  &:nth-child(2n) {
    background-color: var(--wintergreen);
  }
  background: var(--white);
  & > .background {
    width: 100%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 100vw;
    padding: 1em;
    align-items: center;
  }
`;
export const H1 = styled.h1`
  font-family: var(--fontone);
  color: var(--black);
  font-size: 1.2em;
  max-width: 400px;
`;

const AccordionSection = ({ accordionData }) => {
  return (
    <Section>
      {/* <BigSection className="wrap"> */}
      <H1>Question about products</H1>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
      {/* </BigSection> */}
    </Section>
  );
};

export default AccordionSection;
