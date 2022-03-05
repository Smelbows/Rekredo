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
import { P, H6 } from 'styledElements/Texts';

import { getUserDetails } from 'reducers/user';

const ConfirmButton = styled(Button)`
  color: black;
  max-height: 3rem;
  box-shadow: 0.9em 1em 5em 0.2em var(--saffron);
  margin-top: 1em;
`;

const CheckoutContainer = styled(BigSection)`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  min-height: 20em;
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
  }, [dispatch]);

  useEffect(() => {
    if (orderSuccess) {
      setTimeout(navigate('/account'), 5000);
    } else if (orderSuccess === false) {
    } else {
    }
  }, [orderSuccess, navigate]);

  const onOrderConfirm = () => {
    dispatch(sendOrder(myCart, accessToken));
  };

  return (
    <MiddleContainer>
      <CheckoutContainer>
        <Cart />
        <div>
          {/* Text is white right now but the button works */}
          {myCart.length === 0 ? (
            <H6 color="black">
              Your cart is empty right now. Head over to the products page to
              add a prop to your cart.
            </H6>
          ) : (
            <div>
              <P>
                Great choices, click the confirm button to complete your order
              </P>
              <ConfirmButton onClick={onOrderConfirm}>
                Confirm Order
              </ConfirmButton>
            </div>
          )}
        </div>
      </CheckoutContainer>
    </MiddleContainer>
  );
};

export default Checkout;
