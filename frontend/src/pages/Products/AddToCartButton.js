import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cart } from 'reducers/cart';

import { Button } from 'styledElements/Buttons';

const AddToCartButton = ({item}) => {
  const dispatch = useDispatch();

  const myCart = useSelector((state) => state.cart.cartList);

  const onAddToCart = (product) => {
    dispatch(cart.actions.setCart(product));
  };

  const itemIsInCart = (item) => {
    return myCart.filter((prop) => prop._id === item._id).length > 0;
  };

  return (
    <Button propWidth="90%"
    propBorder="none" onClick={() => onAddToCart(item)} disabled={itemIsInCart(item)}>
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
