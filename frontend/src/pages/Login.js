import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUpOrLogIn } from '../reducers/user';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const mode = '/log-in';

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    if (token) {
      navigate('/products');
    }
  }, [token, navigate]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    dispatch(userSignUpOrLogIn(name, password, mode));
  };

  return (
    <div>
      <form onSubmit={onUserSubmit} className='signin-form'>
        <h1>Log in</h1>
        <input
          type='text'
          placeholder='username'
          className='input-field'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='input-field'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className='submit-button' type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
