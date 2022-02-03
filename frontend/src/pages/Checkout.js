import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sendOrder } from 'reducers/cart';
import Cart from '../components/Cart';
import styled from 'styled-components';

import { BigSection } from 'styledElements/Card';
import { Button } from 'styledElements/Buttons';
import { MiddleContainer } from 'styledElements/Container';

const ConfirmButton = styled(Button)`
color: black;
 max-height: 3rem;
 box-shadow: 0.9em 1em 5em 0.2em var(--saffron);
 margin-top: 1em;
`;

const Checkout = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart.cartList);
  const accessToken = useSelector((state) => state.user.accessToken);
  const onOrderConfirm = () => {
    dispatch(sendOrder(myCart, accessToken));
  };

  return (
    <MiddleContainer>
      <BigSection>
        <Cart />
      </BigSection>
      {/* Text is white right now but the button works */}
      <ConfirmButton onClick={onOrderConfirm}>Confirm Order</ConfirmButton>
    </MiddleContainer>
  );
};

export default Checkout;
