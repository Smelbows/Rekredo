import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const BASE_URL = 'http://localhost:8080';

export const upload = createSlice({
  name: 'upload',
  initialState: {
    image: null,
    product: null,
    error: null
  },
  reducers: {
    setImage: (store, action) => {
      store.image = action.payload.response;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setProduct: (store, action) => {
      store.product = action.payload.response;
    }
  }
});

export const uploadImage = (formData) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/image-upload', { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          console.log(json);
          dispatch(upload.actions.setImage(json));
          dispatch(upload.actions.setError(null));
        } else {
          dispatch(upload.actions.setError(json));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

export const uploadProduct = (name, description, category, tags, image) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(BASE_URL + '/product-upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description, category, tags, image })
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          console.log(json);
          dispatch(upload.actions.setProduct(json));
          dispatch(upload.actions.setError(null));
        } else {
          dispatch(upload.actions.setError(json));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
