import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ImageCarousel from './Components/ImageCarousel';
import { BigSection } from '../../styledElements/Card';
import { MiddleContainer } from '../../styledElements/Container';
import { H2, H1, P } from '../../styledElements/Texts';
// import { products } from 'reducers/products';
import AccordionSection from '../Faq/Components/AccordionSection';
import Marquee from 'react-fast-marquee';

const H1x = styled.h1`
  color: black;
  font-size: 4rem;
  margin-bottom: 1em;
`;
const H2x = styled(H2)`
  color: black;
  line-height: 1.75em;
  font-weight: 400;
`;
// const HeroImg = styled.img`
//   height: 70vh;
//   width: 100vw;
//   object-fit: cover;
// `;
// const HeroContainer = styled.div`
//   display: grid;
//   place-items: center;
//   position: relative;
//   padding-bottom: 20px;
// `;
const CarouselContainer = styled.div`
  display: grid;
  /* place-items: center; */
  padding-bottom: 20px;
  width: 100vw;
  height: 100vh;
`;

const PropsCarouselContainer = styled(CarouselContainer)`
  height: 20em;
`;

const TextContainer = styled.div`
  display: grid;
  place-items: center;
  top: 15%;
  position: absolute;
  background-color: rgb(30, 30, 30, 0.5);
  z-index: 1;
  height: 15%;
  width: 70%;
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin: 0 auto;
  text-align: left;
  justify-content: space-around;
  width: 800px;
  height: 400px;
`;
const Text2 = styled(TextHeader)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: right;
  text-align: left;
  width: 800px;
  height: 400px;
`;
const Text3 = styled(TextHeader)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: left;
  text-align: left;
  width: 800px;
  height: 400px;
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

  const accordionData1 = [
    {
      title: 'How do I upload a prop?',
      content: `To be able to upload a prop you need to register an account on our register page. Once you have registered you can upload the prop`,
    },
    {
      title: 'Can I make money on things I have at home?',
      content: `You can make money on things you have at home. The most important factor is that there is a need from a production company.
      As long as you have something interesting or unique your chances increase to make money.`,
    },
    {
      title: 'What are production companies looking for? ',
      content: `Some of the props that we know are important are props that are memorable or tell a story just by being so unique. 
      A good example is a vintage car from a certain era for example a 1970s Ferrari or a Picasso`,
    },
  ];

  const getPropImages = () => {
    if (products) {
      return products.map((prop) => {
        return prop.image.imageUrl;
      });
    } else {
      // Jakob, add your 10 fave prop images here!!!
      return [
        'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      ];
    }
  };

  const images = [
    'https://images.pexels.com/photos/1107666/pexels-photo-1107666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.unsplash.com/photo-1556912300-3017f3de2aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=40',
    'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=40',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=40',
    'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=40',
    'https://images.pexels.com/photos/1107666/pexels-photo-1107666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=40',
    'https://images.pexels.com/photos/7315134/pexels-photo-7315134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2589048/pexels-photo-2589048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3817858/pexels-photo-3817858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ];
  return (
    <>
      <MiddleContainer>
        <TextContainer>
          <Header className="hero-text"> REKREDO </Header>
          <H2 className="hero-text"> REKVISITA - ON DEMAND </H2>
        </TextContainer>
        <CarouselContainer>
          <ImageCarousel images={images} quantity={1} />
        </CarouselContainer>
      </MiddleContainer>
      <BigSection>
        <TextHeader>
          <H1x>We are Rekredo</H1x>
        </TextHeader>
        <Text2>
          <H2x>A place for your belongings.</H2x>{' '}
        </Text2>
        <Text3>
          <H2x>
            We help bridging the connection between individuals and companies so
            that renting can occur with ease. Rekredo is on a mission to
            showcase your valuables in the next movies and tv series.
          </H2x>
        </Text3>
      </BigSection>
      <BigSection>
        <H2>Production Companies, we've got you!</H2>
        <H2>Individuals, we got you too.</H2>
      </BigSection>
      <BigSection>
        {images && (
          <PropsCarouselContainer>
            <H1>Recently upload potential!</H1>
            <ImageCarousel images={getPropImages()} quantity={3} />
          </PropsCarouselContainer>
        )}
      </BigSection>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>

      <AccordionSection accordionData={accordionData1} />
    </>
  );
};

export default Home;
