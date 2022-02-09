import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

import { BASE_URL } from '../utils/config';

export const products = createSlice({
  name: 'products',
  initialState: {
    productList: null,
    error: null,
  },
  reducers: {
    setAvailability: (store, action) => {},
    setProducts: (store, action) => {
      store.productList = action.payload.response;
      // const newProduct = {

      //   productList: action.payload.response,

      // };
      // store.productList = [newProduct, ...store.productList];
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setCart: (store, action) => {
      const itemNotInCart =
        store.cart.filter((item) => item._id === action.payload._id).length ===
        0;
      if (itemNotInCart) {
        store.cart.push(action.payload);
      }
    },
    deleteOneFromCart: (store, action) => {
      const itemsToSave = store.cart.filter(
        (item) => item._id !== action.payload._id
      );
      store.cart = itemsToSave;
    },
    emptyCart: (store, action) => {
      store.cart = [];
    },
  },
});

export const showProduct = (searchValue) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + `/products?description=${searchValue}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(products.actions.setProducts(json));
          dispatch(products.actions.setError(null));
        } else {
          dispatch(products.actions.setError(json.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
