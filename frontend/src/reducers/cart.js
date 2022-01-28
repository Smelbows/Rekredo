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
        store.cartList.filter((item) => item._id === action.payload._id)
          .length === 0;
      if (itemNotInCart) {
        store.cartList.push(action.payload);
      }
    },
    deleteOneFromCart: (store, action) => {
      const itemsToSave = store.cartList.filter(
        (item) => item._id !== action.payload._id
      );
      store.cartList = itemsToSave;
    },
    emptyCart: (store, action) => {
      store.cartList = []
    }
  },
});
