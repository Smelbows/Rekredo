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
      orders: [],
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
        store.personal.ownedProducts =
          action.payload.response.personal?.ownedProducts;
      }
    },
    setBusinessUser: (store, action) => {
      store.business.location = action.payload.response.business?.location;
      store.business.vatNumber = action.payload.response.business?.vatNumber;
      store.business.orders = action.payload.response.business?.myOrders;
    },
    setOrders: (store, action) => {
      const ordersToSave = store.business.orders.filter(
        (order) => order._id !== action.payload.orderId
      );
      store.business.orders = ordersToSave;
    },
    setProducts: (store, action) => {
      const productsToSave = store.personal.ownedProducts.filter(
        (product) => product._id !== action.payload.productId
      );
      store.personal.ownedProducts = productsToSave;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUserToLoggedOut: (store) => {
      store.username = null;
      store.accessToken = null;
      store.email = null;
      store.accountType = null;
      store.personal.ownedProducts = [];
      store.business.location = '';
      store.business.vatNumber = null;
      store.business.orders = [];
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

export const deleteAnOrder = (id) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/delete-order', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: accessToken,
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(user.actions.setOrders(json.response));
        } else {
          dispatch(user.actions.setError(json.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

export const deleteAProduct = (id) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/delete-product', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: accessToken,
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(user.actions.setProducts(json.response));
        } else {
          dispatch(user.actions.setError(json.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
