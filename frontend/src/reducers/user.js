import { createSlice } from '@reduxjs/toolkit';

import { ui } from './ui';

import { BASE_URL } from '../utils/config';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    location: null,
    vatNumber: null,
    accessToken: null,
    error: null,
  },
  reducers: {
    setPersonalUser: (store, action) => {
      store.username = action.payload.response.username;
      store.email = action.payload.response.email;
      store.accessToken = action.payload.response.accessToken;
    },
    setBusinessUser: (store, action) => {
      store.username = action.payload.response.username;
      store.email = action.payload.response.email;
      store.location = action.payload.response.location;
      store.vatNumber = action.payload.response.vatNumber;
      store.accessToken = action.payload.response.accessToken;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUserToLoggedOut: (store) => {
      store.username = null;
      store.accessToken = null;
      store.email = null;
      store.location = null;
      store.vatNumber = null;
      store.error = null;
    },
  },
});

export const personalUserLogin = (username, password, mode) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch(BASE_URL + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(user.actions.setPersonalUser(json));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setError(json.response));
          console.log(json.response);
          dispatch(user.actions.setUserToLoggedOut());
        }
      })

      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

export const personalUserRegister = (username, password, email, mode) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch(BASE_URL + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(user.actions.setPersonalUser(json));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setError(json.response));
          dispatch(user.actions.setUserToLoggedOut());
        }
      })

      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

export const businessUserRegister = (
  businessName,
  password,
  email,
  vatNumber,
  location,
  mode
) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch(BASE_URL + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        businessName,
        password,
        email,
        vatNumber,
        location,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(user.actions.setBusinessUser(json));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setError(json.response));
          dispatch(user.actions.setUserToLoggedOut());
        }
      })

      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
