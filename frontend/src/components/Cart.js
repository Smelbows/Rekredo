import React from 'react';
import { useSelector } from 'react-redux';
import { products } from '../reducers/products';

import { ProductCard } from '../styledElements/Card';
import { H1, P, ProductText } from '../styledElements/Texts';

const Cart = () => {
  const myCart = useSelector((state) => state.products.cart);
  return (
    <>
      {myCart.map((item) => (
        <ProductCard key={item._id}>
          <ProductText>
            <P>{item.name}</P>
            <P>{item.description}</P>
            <P>{item.category}</P>
            <P>{item.tags}</P>
          </ProductText>
          <img src={item.image?.imageUrl} alt="website" />
        </ProductCard>
      ))}
    </>
  );
};

export default Cart;
