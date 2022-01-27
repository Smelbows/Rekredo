import { createSlice } from '@reduxjs/toolkit';
// import { ui } from './ui';

// import { BASE_URL } from '../utils/config';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
  },
  reducers: {
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
    // emptyCart: (store, action) => {
    //   store.cart = []
    // }
  },
});