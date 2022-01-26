import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { products } from 'reducers/products';

import { showProduct } from 'reducers/products';
import styled from 'styled-components';
import { Section, ProductCard } from '../styledElements/Card';
import { H1, P, ProductText } from '../styledElements/Texts';
import { Button, SmallButton } from 'styledElements/Buttons';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.ui.loading);
  const itemsInCart = useSelector((state) => state.products.cart);
  // console.log(itemsInCart)

  console.log(itemsInCart, 'cart items');
  useEffect(() => {
    dispatch(showProduct());
  }, [dispatch]);

  const onAddToCart = (product) => {
    dispatch(products.actions.setCart(product));
  };

  return (
    <>
      <Section>
        <H1>Products</H1>
        {!loading
          ? allProducts?.map((item) => (
              <ProductCard key={item._id}>
                <ProductText>
                  <P>{item.name}</P>
                  <P>{item.description}</P>
                  <P>{item.category}</P>
                  <P>{item.tags}</P>
                </ProductText>
                <img src={item.image?.imageUrl} alt="website" />
                <SmallButton onClick={() => navigate(`/products/${item._id}`)}>
                  Prop details
                </SmallButton>
                <Button
                  onClick={() => onAddToCart(item)}
                  disabled={itemsInCart.includes(item)}
                >
                  Add to cart
                </Button>
                {itemsInCart.includes(item) && <P>Item added in cart</P>}
              </ProductCard>
            ))
          : null}
      </Section>
    </>
  );
};

export default Products;
