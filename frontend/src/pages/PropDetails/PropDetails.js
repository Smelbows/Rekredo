import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MiddleContainer } from 'styledElements/Container';

import { H3, P } from 'styledElements/Texts';

import AddToCartButton from 'pages/Products/AddToCartButton';
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 75vh;

  @media (min-width: 768px) {
    position: initial;
    z-index: 5;
    padding: 3rem;
  }
`;

const PropBox = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    height: 70vh;
    background-image: url('${(props) => props.backImage}');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const PropImage = styled.img`
  width: 100%;
  margin: 4em auto;

  @media (min-width: 768px) {
    height: 25rem;
    width: 25rem;
    z-index: 5;
  }
`;

const PropLink = styled(Link)`
  display: flex;
  align-self: self-start;
  margin: 1em;
  z-index: 5;
`;

const Overlay = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    width: 100vw;
    height: 70vh;
    background-color: rgb(30, 30, 30, 0.5);
    z-index: 1;
  }
`;

const ContentBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    z-index: 5;
  }
`;

const PropDetails = () => {
  const myCart = useSelector((state) => state.cart.cartList);
  const typeOfUser = useSelector((state) => state.user.accountType);

  const products = useSelector((state) => state.products.productList);
  //real value of the slug
  const { propid } = useParams();

  //match prop._id from db
  const prop = products.find((prop) => prop._id === propid);
  console.log(prop);

  const itemIsInCart = (item) => {
    return myCart.filter((prop) => prop._id === item._id).length > 0;
  };

  return (
    <MiddleContainer>
      <Overlay></Overlay>
      <PropBox backImage={prop.image?.imageUrl}>
        <PropLink to="/products"> &#8678; Back to all props</PropLink>
        <ContentBox>
          <PropImage src={prop.image?.imageUrl} alt={prop.name}></PropImage>
          <TextBox>
            <H3 color="var(--white)">{prop.name}</H3>
            <P color="var(--white)">{prop.description}</P>
            <P color="var(--white)">{prop.category}</P>
            <div>
              {prop.tags.map((item) => (
                <P color="var(--white)">#{item}</P>
              ))}
            </div>
            {itemIsInCart(prop) ? (
              <P>Item in cart</P>
            ) : (
              <>
                {typeOfUser === 'Business' && <AddToCartButton item={prop} />}
              </>
            )}
          </TextBox>
        </ContentBox>
      </PropBox>
    </MiddleContainer>
  );
};

export default PropDetails;
