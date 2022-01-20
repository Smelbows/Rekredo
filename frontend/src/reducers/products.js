import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const BASE_URL = 'http://localhost:8080';

export const products = createSlice({
  name: 'products',
  initialState: {
    productList: null,
    error: null
  },
  reducers: {
    setAvailability: (store, action) => {},
    setProducts: (store, action) => {
      store.productList = action.payload.response;
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
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
          dispatch(products.actions.setError(json));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
