import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from '../../../reducers/cart';

import { ProductCard } from '../../../styledElements/Card';
import { P, ProductText } from '../../../styledElements/Texts';
import { SmallButton } from '../../../styledElements/Buttons';

const Cart = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart.cartList);
  const onDeleteItem = (product) => {
    dispatch(cart.actions.deleteOneFromCart(product));
  };

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
          <SmallButton onClick={() => onDeleteItem(item)}>Delete</SmallButton>
        </ProductCard>
      ))}
    </>
  );
};

export default Cart;
