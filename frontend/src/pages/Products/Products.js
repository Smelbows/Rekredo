import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { products } from '../reducers/products';
// import { cart } from '../../reducers/cart';
// import { user } from '../../reducers/user';
import styled from 'styled-components';

import { showProduct } from '../../reducers/products';
// import styled from 'styled-components';
import {
  ProductCard,
  HeaderSection,
  BigSection,
} from '../../styledElements/Card';
import { H1, H2, P, H4, ProductText } from '../../styledElements/Texts';
import { SmallButton } from '../../styledElements/Buttons';
import { MiddleContainer } from '../../styledElements/Container';

import AddToCartButton from './AddToCartButton';

const Input = styled.input`
  border-radius: 20px;
  width: 60vw;
  padding: 0.4em;
  margin-top: 3em;
  text-align: center;
  font-family: var(--fontone);
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 5px;
  box-shadow: inset 1px 0px 10px 0.5px var(--black);
`;

const H1x = styled(H1)`
  padding-bottom: 1em;
`;
const Px = styled(P)`
  padding-bottom: 1em;
`;
// const Text = styled.div`
//   width: 80vw;
//   border: 2px solid black;
// `;
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.ui.loading);
  const myCart = useSelector((state) => state.cart.cartList);
  const typeOfUser = useSelector((state) => state.user.accountType);
  // const accessToken = useSelector((state) => state.user.accessToken)

  useEffect(() => {
    dispatch(showProduct());
  }, [dispatch]);

  // const onAddToCart = (product) => {
  //   dispatch(cart.actions.setCart(product));
  // };

  const itemIsInCart = (item) => {
    return myCart.filter((prop) => prop._id === item._id).length > 0;
  };

  return (
    <MiddleContainer>
      <HeaderSection>
        <H1x>Props collection</H1x>
        <H4>
          Choose from our unique assortment of uploaded props from people all
          over Europe
        </H4>
        <Px>
          Either use our search bar or fine tune your selection through the
          category buttons
        </Px>
        <div>
          <form>
            <Input placeholder="Searchbar"></Input>
          </form>
        </div>
      </HeaderSection>
      <MiddleContainer>
        {!loading ? (
          allProducts?.map((item) => (
            <ProductCard key={item._id}>
              <ProductText>
                <H4>{item.category}</H4>
                <H2>{item.name}</H2>
              </ProductText>
              <img
                src={item.image?.imageUrl}
                className="product-image"
                alt="website"
              />
              <SmallButton onClick={() => navigate(`/products/${item._id}`)}>
                Prop details
              </SmallButton>
              {itemIsInCart(item) ? (
                <P>Item in cart</P>
              ) : (
                <>
                  {typeOfUser === 'Business' && (
                    <AddToCartButton item={item} />
                    // <Button
                    //   onClick={() => onAddToCart(item)}
                    //   disabled={itemIsInCart(item)}
                    // >
                    //   Add to cart
                    // </Button>
                  )}
                </>
              )}
            </ProductCard>
          ))
        ) : (
          <H1>Loading products be patient</H1>
        )}
      </MiddleContainer>
      <BigSection>
        <P>Text holder for something like pagination</P>
      </BigSection>
    </MiddleContainer>
  );
};

export default Products;
