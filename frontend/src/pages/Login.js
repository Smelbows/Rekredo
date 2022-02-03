import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../reducers/user';

import { FormBox, StyledInput, Form } from 'styledElements/Form';
// import { Main } from '../styledElements/Card';
import { SmallButton } from 'styledElements/Buttons';
import { MiddleContainer } from 'styledElements/Container';

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
      <FormBox>
        <Form onSubmit={onUserSubmit} className='signin-form'>
          <h1>Log in</h1>
          <div>
            <p>don't have an account?</p>
            <Link to='/register'>register here</Link>
          </div>
          {error && <h1>{checkError()}</h1>}
          <StyledInput
            type='text'
            placeholder='username'
            className='input-field'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <StyledInput
            type='password'
            placeholder='password'
            className='input-field'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <SmallButton className='submit-button' type='submit'>
            Sign in
          </SmallButton>
        </Form>
      </FormBox>
    </MiddleContainer>
  );
};

export default Login;
