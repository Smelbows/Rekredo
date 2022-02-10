import styled from 'styled-components';

import Accordion from './Accordion';
import { H4 } from 'styledElements/Texts';

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  width: 100vw;
  &:nth-child(2n) {
    background-color: var(--wintergreen);
  }
  background: var(--white);
  & > .background {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 100vw;
    padding: 10em;
  }
`;

const AccordionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  margin: 2em 0;

  @media (min-width: 768px) {
    height: 33rem;
    min-width: 15rem;
    background-image: url('${(props) => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 2rem;
    opacity: 0.7;
    display: flex;
    place-items: center;
  }
`;

const AccordionSection = ({ accordionData, image, text }) => {
  return (
    <Section>
      <TitleBox image={image}>
        <H4 color="white" textDecor="none" backGroundColor="rgb(30,30,30,0.7)">
          {text}
        </H4>
      </TitleBox>
      <AccordionBox>
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </AccordionBox>
    </Section>
  );
};

export default AccordionSection;

//  <div className="accordion">
