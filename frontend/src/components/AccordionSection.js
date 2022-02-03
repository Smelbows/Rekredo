import { BigSection } from '../styledElements/Card';
import styled from 'styled-components';

import Accordion from '../components/Accordion';

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
  font-size: 1.2em;
  max-width: 400px;
`;

const AccordionSection = ({ accordionData }) => {
  return (
    <Section>
      <BigSection className="wrap">
        <H1>Question about products</H1>
        <div className="accordion">
          {accordionData.map(({ title, content }, index) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </div>
      </BigSection>
    </Section>
  );
};

export default AccordionSection;
