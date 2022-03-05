import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

//redux
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { user } from '../src/reducers/user';
import { products } from '../src/reducers/products';
import { ui } from '../src/reducers/ui';
import { upload } from '../src/reducers/upload';
import { cart } from 'reducers/cart';

const reducer = combineReducers({
  user: user.reducer,
  products: products.reducer,
  ui: ui.reducer,
  upload: upload.reducer,
  cart: cart.reducer,
});

// const store = configureStore({ reducer });

// To change from configure store to create when we want to add local storage

const persistedStateJSON = localStorage.getItem('RekredoReduxState');

let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  const stateToPersist = { user: state.user, cart: state.cart };
  localStorage.setItem('RekredoReduxState', JSON.stringify(stateToPersist));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="app-container" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function.
reportWebVitals();
