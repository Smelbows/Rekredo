import React from 'react';
import styled from 'styled-components';
import { Button } from 'styledElements/Buttons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { cart } from 'reducers/cart';

const LogoutButton = styled(Button)`
  color: black;
`;
export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(user.actions.setUserToLoggedOut());
    dispatch(cart.actions.emptyCart());
    navigate('/');
  };

  return <LogoutButton onClick={onLogOut}>Log Out</LogoutButton>;
};
