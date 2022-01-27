import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderSection } from './Nav';
import { Button } from '../styledElements/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'reducers/user';
import { products } from 'reducers/products';

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 10em;
  background-color: #546d64;
  border: 1px solid black;
  justify-content: center;
  position: absolute;
`;

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);

  const onLogOut = () => {
    dispatch(user.actions.setUserToLoggedOut());
    dispatch(products.actions.emptyCart());
  };

  return (
    <FooterContainer>
      <HeaderSection>
        <NavLink to="/">Go home</NavLink>
        <p>Hi this is a footer</p>
      </HeaderSection>
      <Button onClick={onLogOut}>Log Out</Button>
    </FooterContainer>
  );
};

export default Footer;
