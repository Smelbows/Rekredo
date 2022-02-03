import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sendOrder } from 'reducers/cart';
import Cart from '../components/Cart';

import { BigSection, Main } from 'styledElements/Card';
import { Button } from 'styledElements/Buttons';

const Checkout = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart.cartList);
  const accessToken = useSelector((state) => state.user.accessToken);
  const onOrderConfirm = () => {
    dispatch(sendOrder(myCart, accessToken));
  };

  return (
    <Main>
      <BigSection>

      <Cart />
      </BigSection>
      {/* Text is white right now but the button works */}
      <Button onClick={onOrderConfirm}>Confirm Order</Button>
    </Main>
  );
};

export default Checkout;
