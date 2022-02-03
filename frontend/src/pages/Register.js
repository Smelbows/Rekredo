import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { P } from 'styledElements/Texts';
import { Form, StyledInput, FormBox } from 'styledElements/Form';
import { SmallButton } from 'styledElements/Buttons';
// import { Main } from '../styledElements/Card';
import { userRegister } from '../reducers/user';
import { user } from '../reducers/user';
import { MiddleContainer } from 'styledElements/Container';

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
        <FormBox>
          <h1>Register</h1>
          <div>
            <P>already have an account?</P>
            <Link to="/log-in">sign in here</Link>
          </div>
          <div>
            <div>
              <label htmlFor="personal">Personal</label>
              <StyledInput
                id="personal"
                type="radio"
                checked={accountType === 'Personal'}
                onChange={() => setAccountType('Personal')}
              />
            </div>
            <div>
              <label htmlFor="business">Business</label>
              <StyledInput
                id="business"
                type="radio"
                checked={accountType === 'Business'}
                onChange={() => setAccountType('Business')}
              />
            </div>
          </div>
          <div>
            {error && <h1>{checkError()}</h1>}
            <Form onSubmit={onUserSubmit} className="signin-form">
              <StyledInput
                type="text"
                placeholder="username"
                className="input-field"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <StyledInput
                type="password"
                placeholder="password"
                className="input-field"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <StyledInput
                type="email"
                placeholder="email address"
                className="input-field"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {/* {mode === '/register/business' && (
                <StyledInput
                  type='number'
                  placeholder='VAT'
                  className='input-field'
                  value={vatNumber}
                  onChange={(event) => setVatNumber(event.target.value)}
                />
              )}
              {mode === '/register/business' && (
                <StyledInput
                  type='text'
                  placeholder='Location'
                  className='input-field'
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              )} */}

              <SmallButton className="submit-button" type="submit">
                Register
              </SmallButton>
            </Form>
          </div>
        </FormBox>
      )}
    </MiddleContainer>
  );
};

export default Register;
