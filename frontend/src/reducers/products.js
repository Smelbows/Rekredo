import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

import { BASE_URL } from '../utils/config';
// console.log(BASE_URL);
// const BASE_URL = 'http://localhost:8080';

export const products = createSlice({
  name: 'products',
  initialState: {
    productList: null,
    error: null,
    cart: [],
  },
  reducers: {
    setAvailability: (store, action) => {},
    setProducts: (store, action) => {
      store.productList = action.payload.response;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setCart: (store, action) => {
      store.cart.push(action.payload);
    },
    deleteFromCart: (store, action) => {
      const itemsToSave = store.cart.filter(
        (item) => item._id !== action.payload._id
      );
      store.cart = itemsToSave;
    },
  },
});

export const showProduct = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/products')
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          console.log(json);
          dispatch(products.actions.setProducts(json));
          dispatch(products.actions.setError(null));
        } else {
          dispatch(products.actions.setError(json.response));
          console.log(json.response);
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
