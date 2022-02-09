import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ImageCarousel from './Components/ImageCarousel';
import { BigSection } from '../../styledElements/Card';
import { MiddleContainer } from '../../styledElements/Container';
import { H2, H1, H3 } from '../../styledElements/Texts';
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
// const Text2 = styled(TextHeader)`
//   display: flex;
//   flex-direction: column;
//   align-items: right;
//   text-align: left;
//   width: 80vw;
//   height: 20vh;
// `;
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
  position: relative;
  padding: 3em;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftText = styled.div`
  width: 300%;
  position: absolute;

  margin-right: 2em;
  bottom: 40%;
  right: 105%;
  @media (max-width: 768px) {
    width: 100vw;
    bottom: 0;
    right: 0;
  }
`;

const Seperator = styled.div`
  display: grid;
  place-items: center;
  font-size: 250px;
  color: white;
  transform: rotate(20deg);
  @media (max-width: 768px) {
    width: 100vw;
    font-size: 100px;
  }
`;

const RightText = styled.div`
  width: 300%;
  margin-left: 2em;
  position: absolute;
  top: 40%;
  left: 105%;
  @media (max-width: 768px) {
    width: 100vw;
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

  const accordionData1 = [
    {
      title: 'How do I upload a prop?',
      content: `To be able to upload a prop you need to register for a personal account on our register page. Once you have registered you can upload the prop.`,
    },
    {
      title: 'Can I make money on things I have at home?',
      content: `You can make money on things you have at home. The most important factor is that there is a need from a production company.
      As long as you have something interesting or unique, your chance to make money increases.`,
    },
    {
      title: 'What are production companies looking for? ',
      content: `Some of the props that we know are important are props that are memorable or tell a story just by being so unique. 
      A good example is a vintage car from a certain era, for example a 1970s Ferrari, or a Picasso`,
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
        'https://res.cloudinary.com/rekredo/image/upload/v1644336742/props/rmpjhaz3kptjbc3ms1hf.jpg',
        'https://res.cloudinary.com/rekredo/image/upload/v1644336674/props/m10sbq2ytdu7krvqhouv.jpg',
        'https://res.cloudinary.com/rekredo/image/upload/v1644336557/props/vfil3tnckobml40rcnde.jpg',
        'https://res.cloudinary.com/rekredo/image/upload/v1644336507/props/l6vrwzonwmg1xszb6ntk.jpg',
        'https://res.cloudinary.com/rekredo/image/upload/v1644336319/props/xxhf09jsnsiyt137vepb.jpg',
        'https://res.cloudinary.com/rekredo/image/upload/v1644336236/props/undczggld4kpy19jcjza.jpg',
        'https://res.cloudinary.com/rekredo/image/upload/v1644335781/props/we2e1k3lkbgz1gsqrnpg.jpg',
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
          <Header> REKREDO </Header>
          <H2> REKVISITA - ON DEMAND </H2>
        </TextContainer>
        <CarouselContainer>
          <ImageCarousel images={images} quantity={1} />
        </CarouselContainer>
      </MiddleContainer>
      <BigSection>
        <TextHeader>
          <H1x>We are Rekredo</H1x>
        </TextHeader>
        {/* <Text2>
          <H2x>A place for your belongings.</H2x>{' '}
        </Text2> */}
        <Text3>
          <H2x>
            Bridging the gap between individuals who may have a unique cherished
            item sitting at home gathering dust, and production crews who are on
            the hunt for the perfect prop to make their scenes oscar-worthy.
          </H2x>
        </Text3>
      </BigSection>
      <BigSection>
        <TextText>
          <LeftText>
            <H3x>
              <span>Production Companies</span> it's finally here. The platform
              you have been needing all this time. A simplified way for you to
              find what you need for you next production. We have created a
              platform where you easily can connect with people all across
              europe to find unique props what will make the difference in your
              next production! Register and rent away!
            </H3x>
          </LeftText>
          <Seperator>/</Seperator>
          <RightText>
            <H3x>
              <span>Individuals</span> we got you too. REKREDO is a platform for
              all those things that you kept in your home for ages. May it be a
              vintage car, a unique memorable watch or maybe even a summer
              house; you can now rent these objects to production companies that
              are looking for props for their next production. We have created a
              space where you can upload, rent and get paid. What are you
              waiting for register now and
              <span>get paid</span>!
            </H3x>
          </RightText>
        </TextText>
      </BigSection>
      <BigSection>
        {images && (
          <PropsCarouselContainer>
            <H1>Recently upload potential!</H1>
            <ImageCarousel images={getPropImages()} quantity={4} />
          </PropsCarouselContainer>
        )}
      </BigSection>
      <MarqueeSection>
        <Marquee play={true} speed={100} gradient={false}>
          <H2Marq>Cars </H2Marq>
          <H2Marq> Motorbikes</H2Marq>
          <H2Marq> Artwork </H2Marq>
          <H2Marq> Spaces </H2Marq>
          <H2Marq> Furniture </H2Marq>
          <H2Marq> House </H2Marq>
          <H2Marq> Watches </H2Marq>
          <H2Marq> 1970's</H2Marq>
          <H2Marq> 1960's </H2Marq>
          <H2Marq> Clothing </H2Marq>
          <H2Marq> Electronics </H2Marq>
          <H2Marq> More... </H2Marq>
        </Marquee>
      </MarqueeSection>

      <AccordionSection accordionData={accordionData1} />
    </>
  );
};

export default Home;
