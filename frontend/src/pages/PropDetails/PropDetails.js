import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BigSection } from 'styledElements/Card';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MiddleContainer } from 'styledElements/Container';

import { P } from 'styledElements/Texts';

import AddToCartButton from 'pages/Products/AddToCartButton';
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    <MiddleContainer >
      <BigSection>
        <Box>
          <p>{prop.name}</p>
          <p>{prop.description}</p>
          <p>{prop.category}</p>
          <p>{prop.tags}</p>
          {itemIsInCart(prop) ? (
            <P>Item in cart</P>
          ) : (
            <>
              {typeOfUser === 'Business' && (
                <AddToCartButton item={prop} />
              )}
            </>
          )}

          <Link to="/products">Back to all props</Link>
        </Box>
        <img src={prop.image?.imageUrl} alt={prop.name}></img>
      </BigSection>
    </MiddleContainer>
  );
};

export default PropDetails;
