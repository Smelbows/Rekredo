import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { P } from 'styledElements/Texts';
import { Form, StyledInput, FormBox } from 'styledElements/Form';
import { SmallButton } from 'styledElements/Buttons';
import { Main } from '../styledElements/Card';
import { personalUserRegister, businessUserRegister } from '../reducers/user';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [vatNumber, setVatNumber] = useState(0);
  const [mode, setMode] = useState('/register/personal');
  const [registered, setRegistered] = useState(false);

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.user.accessToken);
  const error = useSelector((state) => state.user.error);

  const checkError = () => {
    if (typeof error === 'string') {
      return error;
    } else {
      return 'There was an error in the back end';
    }
  };

  // checks if a user is logged in, naviagtes them away, but only if they have registered first.
  useEffect(() => {
    if (registered && token) {
      navigate('/account');
    }
  }, [registered, token, navigate]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    if (mode === '/register/personal') {
      dispatch(personalUserRegister(name, password, email, mode));
    } else {
      dispatch(
        businessUserRegister(name, password, email, vatNumber, location, mode)
      );
    }
    setRegistered(true);
  };

  return (
    <Main>
      {token ? (
        <p>
          You're currently logged in as ..., please log out to register a new
          account
        </p>
      ) : (
        <FormBox>
          <h1>Register</h1>
          <div>
            <p>already have an account?</p>
            <Link to="/log-in">sign in here</Link>
          </div>
          <div>
            <div>
              <label htmlFor="personal">Personal</label>
              <StyledInput
                id="personal"
                type="radio"
                checked={mode === '/register/personal'}
                onChange={() => setMode('/register/personal')}
              />
            </div>
            <div>
              <label htmlFor="business">Business</label>
              <StyledInput
                id="business"
                type="radio"
                checked={mode === '/register/business'}
                onChange={() => setMode('/register/business')}
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
                placeholder="emailadress"
                className="input-field"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {mode === '/register/business' && (
                <StyledInput
                  type="number"
                  placeholder="VAT"
                  className="input-field"
                  value={vatNumber}
                  onChange={(event) => setVatNumber(event.target.value)}
                />
              )}
              {mode === '/register/business' && (
                <StyledInput
                  type="text"
                  placeholder="Location"
                  className="input-field"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              )}

              <SmallButton className="submit-button" type="submit">
                Register
              </SmallButton>
            </Form>
          </div>
        </FormBox>
      )}
    </Main>
  );
};

export default Register;
