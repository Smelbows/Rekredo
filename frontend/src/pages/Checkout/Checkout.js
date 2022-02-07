import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { cart } from '../../reducers/cart';
import { sendOrder } from '../../reducers/cart';
import Cart from './Components/Cart';

import { BigSection } from '../../styledElements/Card';
import { Button } from '../../styledElements/Buttons';
import { MiddleContainer } from '../../styledElements/Container';
import { P } from 'styledElements/Texts';

import { getUserDetails } from 'reducers/user';

const ConfirmButton = styled(Button)`
  color: black;
  max-height: 3rem;
  box-shadow: 0.9em 1em 5em 0.2em var(--saffron);
  margin-top: 1em;
`;

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myCart = useSelector((state) => state.cart.cartList);
  const accessToken = useSelector((state) => state.user.accessToken);
  const orderSuccess = useSelector((state) => state.cart.orderSuccess);

  useEffect(() => {
    if (!accessToken) {
      navigate('/log-in');
      // maybe don't need to do this dispatch to refresh user details
    } else {
      dispatch(getUserDetails(accessToken));
    }
  }, [accessToken, navigate, dispatch]);

  useEffect(() => {
    dispatch(cart.actions.setOrderSuccess(null));
  }, []);

  useEffect(() => {
    if (orderSuccess) {
      navigate('/account');
    } else if (orderSuccess === false) {
    } else {
    }
  }, [orderSuccess]);

  const onOrderConfirm = () => {
    dispatch(sendOrder(myCart, accessToken));
  };

  console.log(myCart);
  return (
    <MiddleContainer>
      <BigSection>
        <Cart />
      </BigSection>
      {/* Text is white right now but the button works */}
      {myCart.length === 0 ? (
        <P>Your cart is empty right now</P>
      ) : (
        <>
          <div>
            <P>
              Great choices, click the confirm button to complete your order
            </P>
            <ConfirmButton onClick={onOrderConfirm}>
              Confirm Order
            </ConfirmButton>
          </div>
        </>
      )}
    </MiddleContainer>
  );
};

export default Checkout;
