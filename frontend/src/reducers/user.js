import { createSlice } from '@reduxjs/toolkit';

import { ui } from './ui';

import { BASE_URL } from '../utils/config';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    accountType: null,
    accessToken: null,
    error: null,
    personal: {
      ownedProducts: [],
    },
    business: {
      location: '',
      vatNumber: null,
      orders: null,
    },
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload.response.username;
      store.email = action.payload.response.email;
      store.accessToken = action.payload.response.accessToken;
      store.accountType = action.payload.response.accountType;
    },
    setPersonalUser: (store, action) => {
      if (action.payload.response.personal?.ownedProducts) {
        store.personal.myProducts =
          action.payload.response.personal?.ownedProducts;
      }
    },
    setBusinessUser: (store, action) => {
      store.business.location = action.payload.response.business?.location;
      store.business.vatNumber = action.payload.response.business?.vatNumber;
      store.business.orders = action.payload.response.business?.myOrders;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUserToLoggedOut: (store) => {
      store.username = null;
      store.accessToken = null;
      store.email = null;
      store.accountType = null;
      store.personal.ownedProducts = null;
      store.business.location = null;
      store.business.vatNumber = null;
      store.business.orders = null;
      // store.error = null;
    },
  },
});

export const userLogin = (username, password) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch(BASE_URL + '/log-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.response.accountType === 'Personal') {
          dispatch(user.actions.setPersonalUser(json));
          dispatch(user.actions.setUser(json));
          dispatch(user.actions.setError(null));
        } else if (json.success && json.response.accountType === 'Business') {
          dispatch(user.actions.setBusinessUser(json));
          dispatch(user.actions.setUser(json));
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

export const userRegister = (username, password, email, accountType) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch(BASE_URL + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, accountType }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.response.accountType === 'Personal') {
          dispatch(user.actions.setPersonalUser(json));
          dispatch(user.actions.setUser(json));
          dispatch(user.actions.setError(null));
        } else if (json.success && json.response.accountType === 'Business') {
          dispatch(user.actions.setBusinessUser(json));
          dispatch(user.actions.setUser(json));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setError(json.response));
          dispatch(user.actions.setUserToLoggedOut());
        }
      })

      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

export const getUserDetails = (accessToken) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/account', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.response.accountType === 'Personal') {
          dispatch(user.actions.setPersonalUser(json));
          dispatch(user.actions.setUser(json));
          dispatch(user.actions.setError(null));
        } else if (json.success && json.response.accountType === 'Business') {
          dispatch(user.actions.setBusinessUser(json));
          dispatch(user.actions.setUser(json));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setError(json.response));
          dispatch(user.actions.setUserToLoggedOut());
        }
      })

      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

// export const businessUserRegister = (
//   businessName,
//   password,
//   email,
//   vatNumber,
//   location,
//   mode
// ) => {
//   return (dispatch) => {
//     dispatch(ui.actions.setLoading(true));

//     fetch(BASE_URL + mode, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         businessName,
//         password,
//         email,
//         vatNumber,
//         location
//       })
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.success) {
//           dispatch(user.actions.setBusinessUser(json));
//           dispatch(user.actions.setError(null));
//         } else {
//           dispatch(user.actions.setError(json.response));
//           dispatch(user.actions.setUserToLoggedOut());
//         }
//       })

//       .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
//   };
// };
