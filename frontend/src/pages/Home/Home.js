import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ImageCarousel from './Components/ImageCarousel';
import { BigSection } from '../../styledElements/Card';
import { MiddleContainer } from '../../styledElements/Container';
import { H2, H1, H3, H5, H4 } from '../../styledElements/Texts';
// import { products } from 'reducers/products';
import AccordionSection from '../Faq/Components/AccordionSection';
import Marquee from 'react-fast-marquee';

import { images, propImages } from './images';
import { accordionData1 } from 'pages/Faq/accordionContent';


const H1x = styled.h1`
  color: black;
  font-size: 4rem;
  margin-bottom: 1em;
`;
const H3x = styled(H3)`
  color: white;
  line-height: 2.1em;
  font-weight: 400;
`;

const H2Marq = styled(H2)`
  color: black;
  line-height: 1.75em;
  font-weight: 400;
  padding-right: 1em;
`;
const CarouselContainer = styled.div`
  display: grid;
  padding-bottom: 20px;
  width: 100vw;
  height: 100vh;
`;

const MarqueeSection = styled(BigSection)`
  padding: 3em;
`;

const PropsCarouselContainer = styled(CarouselContainer)`
  height: 23em;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1em;
    height: 15em;
    width: 95vw;
  }
`;

const TextContainer = styled.div`
  display: grid;
  place-items: center;
  top: 13%;
  position: absolute;
  background-color: rgb(30, 30, 30, 0.5);
  z-index: 1;
  height: 24vh;
  width: 70vw;
  @media (max-width: 768px) {
    top: 14%;
    width: 90vw;
  }
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  padding: 0em 1em 0em 0em;
  margin: 0 auto;
  text-align: left;
  justify-content: space-around;
  width: 100vw;
  height: 40vh;
`;
const Text3 = styled(TextHeader)`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  width: 80vw;
  height: 20vh;
  margin-bottom: 2em;
`;

const TextText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  max-width: 
  @media (max-width: 768px) {
    width: 100%
  }
`;

const LeftText = styled.div`
  display: grid;
  width: 40%;
  align-content: flex-start;
  @media (max-width: 768px) {
  width: 100%
  }
`;

const Seperator = styled.div`
  display: grid;
  place-items: center;
  width:20%;
  height: 90vh;
  color: white;
  font-size: 10rem;
  transform: rotate(20deg);
  @media (max-width: 768px) {
    width: 100%;
    font-size: 4rem;
    padding: 0.5em;
    transform: rotate(90deg);
    height: 10vh;

  }
`;

const RightText = styled.div`
display: grid;
align-content: flex-end;
width: 40%;
  @media (max-width: 768px) {
width: 100%;
  }
`;

const Header = styled.h1`
  font-size: 6em;
  padding-bottom: 0px;
  margin-bottom: 10px;
  opacity: 0.8;
  color: var(--white);
  font-size: 2em;
  color: var(--white);
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 6em;
  }
`;

const Home = () => {
  const products = useSelector((state) => state.products.productList);

  const getPropImages = () => {
    if (products) {
      return products.map((prop) => {
        return prop.image.imageUrl;
      });
    } else {
      // Jakob, add your 10 fave prop images here!!!
      return propImages;
    }
  };

  return (
    <>
      <MiddleContainer>
        <TextContainer>
          <Header> REKREDO </Header>
          <H2> REKVISITA - ON DEMAND </H2>
        </TextContainer>
        <CarouselContainer>
          <ImageCarousel images={images} quantity={1} />
        </CarouselContainer>
      </MiddleContainer>
      <BigSection>
        <TextHeader>
          <H1 >We are Rekredo</H1>
        </TextHeader>
        <Text3>
          <H5 color="black" weight="400" height="1.75em">
            Bridging the gap between individuals who may have a unique cherished
            item sitting at home gathering dust, and production crews who are on
            the hunt for the perfect prop to make their scenes oscar-worthy.
          </H5>
        </Text3>
      </BigSection>
      <BigSection>
        <TextText>
          <LeftText>
            <H5 height="1.75em">
              <span>Production Companies</span> it's finally here. A simplified way for you to
              find what you need for you next production. We have created a
              platform where you easily can connect with people all across
              europe to find unique props what will make the difference in your
              next production! Register and rent away!
            </H5>
          </LeftText>
          <Seperator>/</Seperator>
          <RightText>
            <H5 height="1.75em">
              <span>Individuals</span> we got you too. REKREDO is a platform for
              all those things that you kept in your home for ages. We have created a
              space where you can upload, rent and get paid. What are you
              waiting for register now and
              <span>get paid</span>!
            </H5>
          </RightText>
        </TextText>
      </BigSection>
      <BigSection>
        {images && (
          <PropsCarouselContainer>
            <H4 color="var(--black)">Recently upload potential!</H4>
            <ImageCarousel images={getPropImages()} quantity={4} />
          </PropsCarouselContainer>
        )}
      </BigSection>
      <MarqueeSection>
        <Marquee play={true} speed={100} gradient={false}>
          <H5>Cars </H5>
          <H5> Motorbikes</H5>
          <H5> Artwork </H5>
          <H5> Spaces </H5>
          <H5> Furniture </H5>
          <H5> House </H5>
          <H5> Watches </H5>
          <H5> 1970's</H5>
          <H5> 1960's </H5>
          <H5> Clothing </H5>
          <H5> Electronics </H5>
          <H5> More... </H5>
        </Marquee>
      </MarqueeSection>

      <AccordionSection accordionData={accordionData1} />
    </>
  );
};

export default Home;
