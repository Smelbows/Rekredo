import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ImageCarousel from './Components/ImageCarousel';
import { BigSection } from '../../styledElements/Card';
import { MiddleContainer } from '../../styledElements/Container';
import { H2, H3, H5, H4, H6 } from '../../styledElements/Texts';
// import { products } from 'reducers/products';
import AccordionSection from '../Faq/Components/AccordionSection';
import Marquee from 'react-fast-marquee';

import { images, propImages } from './images';
import { accordionData1 } from 'pages/Faq/accordionContent';

const CarouselContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    padding-bottom: 20px;
    width: 100vw;
  }
`;

const MarqueeSection = styled(BigSection)`
  padding: 3em;
`;

const PropsCarouselContainer = styled(CarouselContainer)`
  /* height: 40em; */
  display: grid;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1em;
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
  height: 30vh;
  width: 70vw;
  @media (max-width: 768px) {
    background-image: url('${images[2]}');
    position: relative;
    height: 80vh;
    top: 14%;
    width: 90vw;
  }
`;

const TextHeader = styled.div`
  display: grid;
  place-items: center;
  width: 50%;
  height: 60vh;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1em;
  /* padding: 1em; */
  /* max-width:  */
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0em 0em 0em 2em;
    text-align: right;
  }
`;
const TextBoxTop = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1em;
  /* padding: 1em; */
  /* max-width:  */
  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    text-align: right;
    text-align: left;
  }
  @media (max-width: 670px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: right;
    border: 2px solid black;
    text-align: left;
  }
`;
const TextBoxRight = styled.div`
  display: grid;
  align-content: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
    text-align: left;
    /* padding-top: 1em; */
  }
`;

const LeftText = styled.div`
  display: grid;
  width: 40%;
  align-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Seperator = styled.div`
  display: grid;
  place-items: center;
  width: 20%;
  height: 80vh;
  padding-right: 0.25em;
  color: white;
  font-size: 10rem;
  transform: rotate(10deg);
  @media (max-width: 768px) {
    width: 100%;
    font-size: 4rem;
    padding: 1em 0em 1em 0em;
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
          <H3 color="white"> REKVISITA - ON DEMAND </H3>
        </TextContainer>
        <CarouselContainer>
          <ImageCarousel images={images} quantity={1} />
        </CarouselContainer>
      </MiddleContainer>
      <BigSection>
        <TextBoxTop>
          <TextHeader>
            <H2 paddingRight="0.75em">We are Rekredo</H2>
          </TextHeader>
          <TextBoxRight>
            <H6 color="black" weight="400" height="1.75em">
              Bridging the gap between individuals who may have a unique
              cherished item sitting at home gathering dust, and production
              crews who are on the hunt for the perfect prop to make their
              scenes oscar-worthy.
            </H6>
          </TextBoxRight>
        </TextBoxTop>
      </BigSection>
      <BigSection>
        <TextBox>
          <LeftText>
            <H5 height="1.5em" weight="400">
              <span>Production Companies</span> it's finally here. A simplified
              way for you to find what you need for you next production. We have
              created a platform where you easily can connect with people all
              across europe to find unique props what will make the difference
              in your next production! Register and rent away!
            </H5>
          </LeftText>
          <Seperator>/</Seperator>
          <RightText>
            <H5 height="1.5em" weight="400">
              <span>Individuals</span> we got you too. REKREDO is a platform for
              all those things that you kept in your home for ages. We have
              created a space where you can upload, rent and get paid. What are
              you waiting for register now and
              <span>get paid</span>!
            </H5>
          </RightText>
        </TextBox>
      </BigSection>
      <BigSection>
        {images && (
          <PropsCarouselContainer>
            <H4 color="var(--black)">Recently uploaded potential!</H4>
            <ImageCarousel images={getPropImages()} quantity={3} />
          </PropsCarouselContainer>
        )}
      </BigSection>
      <MarqueeSection>
        <Marquee play={true} speed={100} gradient={false}>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            Cars{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Motorbikes
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Artwork{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Spaces{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Furniture{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            House{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Watches{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            1970's
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            1960's{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Clothing{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            Electronics{' '}
          </H5>
          <H5 height="1.75em" paddingRight="2em" weight="400">
            {' '}
            More...{' '}
          </H5>
        </Marquee>
      </MarqueeSection>

      <AccordionSection
        text="Frequently asked questions"
        image={images[0]}
        accordionData={accordionData1}
      />
    </>
  );
};

export default Home;
