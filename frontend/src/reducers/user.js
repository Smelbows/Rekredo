import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const BASE_URL = 'http://localhost:8080';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    accessToken: null,
    error: null
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload.response.username;
      store.accessToken = action.payload.response.accessToken;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUserToLoggedOut: (store) => {
      store.username = null;
      store.accessToken = null;
    }
  }
});

export const userSignUpOrLogIn = (username, password, mode) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch(BASE_URL + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(user.actions.setUser(json));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setError(json));
          dispatch(user.actions.setUserToLoggedOut());
        }
      })

      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
