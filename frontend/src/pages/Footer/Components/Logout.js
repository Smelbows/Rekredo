import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../styledElements/Buttons';
import { useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { cart } from 'reducers/cart';

const LogoutButton = styled(Button)`
color: black;`
;

export const Logout = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(user.actions.setUserToLoggedOut());
    dispatch(cart.actions.emptyCart());
  };

  return <LogoutButton onClick={onLogOut}>Log Out</LogoutButton>;
};
