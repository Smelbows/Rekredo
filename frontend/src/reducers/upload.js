import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

import { BASE_URL } from '../utils/config';
// const BASE_URL = 'http://localhost:8080';

export const upload = createSlice({
  name: 'upload',
  initialState: {
    image: null,
    product: null,
    productSuccess: false,
    imageError: null,
    productError: null,
  },
  reducers: {
    setImage: (store, action) => {
      store.image = action.payload.response;
    },
    setImageError: (store, action) => {
      store.imageError = action.payload;
    },
    setProductError: (store, action) => {
      store.productError = action.payload;
      if (action.payload) {
        store.productSuccess = false;
      }
    },
    setProduct: (store, action) => {
      store.product = action.payload.response;
      store.productSuccess = action.payload.success;
    },
    clearImageState: (store) => {
      store.image = null;
    },
  },
});

export const uploadImage = (formData) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/image-upload', { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(upload.actions.setImage(json));
          dispatch(upload.actions.setImageError(null));
        } else {
          dispatch(upload.actions.setImageError(json.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
    // (clearForm());
  };
};

export const uploadProduct = (
  name,
  description,
  category,
  tags,
  image,
  clearForm,
  accessToken
) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/product-upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ name, description, category, tags, image }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(upload.actions.setProductError(null));
          dispatch(upload.actions.setProduct(json));
          dispatch(upload.actions.clearImageState());
          clearForm();
        } else {
          dispatch(upload.actions.setProductError(json.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
    // .(clearForm());
  };
};
