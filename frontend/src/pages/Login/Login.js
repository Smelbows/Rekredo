import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../reducers/user';

import { FormBox, StyledInput, Form } from '../../styledElements/Form';
// import { Main } from '../styledElements/Card';
import { SmallButton } from '../../styledElements/Buttons';
import { MiddleContainer } from '../../styledElements/Container';
import { H4, P, TextBox } from '../../styledElements/Texts';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.accessToken);
  const error = useSelector((state) => state.user.error);

  const checkError = () => {
    if (typeof error === 'string') {
      return error;
    } else {
      return 'There was an error in the back end';
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/account');
    }
  }, [token, navigate]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(name, password));
  };

  return (
    <MiddleContainer>
      <FormBox margin="6em auto">
        <H4 color="black">Log in</H4>
        <TextBox>
          <P>don't have an account?&nbsp;</P>
          <Link to="/register">register here</Link>
        </TextBox>
        {error && <h1>{checkError()}</h1>}
        <Form onSubmit={onUserSubmit} className="signin-form">
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

          <SmallButton className="submit-button" type="submit">
            Sign in
          </SmallButton>
        </Form>
      </FormBox>
    </MiddleContainer>
  );
};

export default Login;
