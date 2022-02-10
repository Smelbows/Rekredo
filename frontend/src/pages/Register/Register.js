import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { H4, P, TextBox } from '../../styledElements/Texts';
import { Form, StyledInput, FormBox, Label } from '../../styledElements/Form';
import { SmallButton } from '../../styledElements/Buttons';
// import { Main } from '../styledElements/Card';
import { userRegister } from '../../reducers/user';
import { user } from '../../reducers/user';
import { MiddleContainer } from '../../styledElements/Container';
import styled from 'styled-components';

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const [location, setLocation] = useState('');
  // const [vatNumber, setVatNumber] = useState(0);
  const [accountType, setAccountType] = useState('Personal');
  const [registered, setRegistered] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.user.accessToken);
  const error = useSelector((state) => state.user.error);
  const username = useSelector((state) => state.user.username);

  const checkError = () => {
    if (typeof error === 'string') {
      return error;
    } else {
      return 'There was an error in the back end';
    }
  };

  // checks if a user is logged in, navigates them away, but only if they have registered first.
  useEffect(() => {
    if (registered && token) {
      navigate('/account');
    }
  }, [registered, token, navigate]);

  useEffect(() => {
    dispatch(user.actions.setError(null));
  }, [dispatch]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    // if (accountType === 'Personal') {
    //   dispatch(userRegister(name, password, email, accountType));
    // } else {
    //   dispatch(
    //    userRegister(name, password, email, vatNumber, location, mode)
    //   );
    // }
    dispatch(userRegister(name, password, email, accountType));
    setRegistered(true);
  };

  return (
    <MiddleContainer>
      {token ? (
        <p>
          You're currently logged in as {`${username}`} please log out to
          register a new account
        </p>
      ) : (
        <FormBox margin="6em auto">
          <H4 color="black">Register</H4>
          <TextBox>
            <P>already have an account?&nbsp;</P>
            <Link to="/log-in">sign in here</Link>
          </TextBox>
          <RadioButtonsContainer>
            <div>
              <Label bottom="0" htmlFor="personal">
                Personal
              </Label>
              <StyledInput
                height={'30px'}
                margin="0"
                id="personal"
                type="radio"
                checked={accountType === 'Personal'}
                onChange={() => setAccountType('Personal')}
              />
            </div>
            <div>
              <Label bottom="0" htmlFor="business">
                Business
              </Label>
              <StyledInput
                height={'30px'}
                margin="0"
                id="business"
                type="radio"
                checked={accountType === 'Business'}
                onChange={() => setAccountType('Business')}
              />
            </div>
          </RadioButtonsContainer>
          {/* <div> */}
          {error && <h1>{checkError()}</h1>}
          <Form padding='none' onSubmit={onUserSubmit} className="signin-form">
            <StyledInput
              type="text"
              placeholder="username"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <StyledInput
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <StyledInput
              type="email"
              placeholder="email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />


            <SmallButton className="submit-button" type="submit">
              Register
            </SmallButton>
          </Form>
          {/* </div> */}
        </FormBox>
      )}
    </MiddleContainer>
  );
};

export default Register;
