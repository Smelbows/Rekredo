import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { personalUserRegister, businessUserRegister } from '../reducers/user';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [vatNumber, setVatNumber] = useState();
  const [mode, setMode] = useState('/register/personal');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.accessToken);
  const error = useSelector((state) => state.user.error);

  // useEffect(() => {
  //   if (token) {
  //     navigate('/account');
  //   }
  // }, [token, navigate]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    if (mode === '/register/personal') {
      dispatch(personalUserRegister(name, password, email, mode));
    } else {
      dispatch(
        businessUserRegister(name, password, email, vatNumber, location, mode)
      );
    }
  };

  return (
    <>
    <h1>Register</h1>
    <div><p>already have an account?</p><Link to='/log-in'>sign in here</Link></div>
      <div>
        <label htmlFor="personal">Personal</label>
        <input
          id="personal"
          type="radio"
          checked={mode === '/register/personal'}
          onChange={() => setMode('/register/personal')}
        />
      </div>
      <div>
        <label htmlFor="business">Business</label>
        <input
          id="business"
          type="radio"
          checked={mode === '/register/business'}
          onChange={() => setMode('/register/business')}
        />
      </div>
      <div>
        <form onSubmit={onUserSubmit} className="signin-form">
          {error && <h1>{error}</h1>}
          <input
            type="text"
            placeholder="username"
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="email"
            placeholder="emailadress"
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {mode === '/register/business' && (
            <input
              type="number"
              placeholder="VAT"
              className="input-field"
              value={vatNumber}
              onChange={(event) => setVatNumber(event.target.value)}
            />
          )}
          {mode === '/register/business' && (
            <input
              type="text"
              placeholder="Location"
              className="input-field"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          )}

          <button className="submit-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
