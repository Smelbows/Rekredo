import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   applyMiddleware,
//   combineReducers,
//   createStore,
// } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { user } from '../src/reducers/user';
// import { products } from '../src/reducers/products';
// import { ui } from '../src/reducers/ui';
// import { upload } from '../src/reducers/upload';
// import { cart } from 'reducers/cart';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import PropDetails from './pages/PropDetails/PropDetails';
import CookieConsent from 'react-cookie-consent';

import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';

import './App.css';

// const reducer = combineReducers({
//   user: user.reducer,
//   products: products.reducer,
//   ui: ui.reducer,
//   upload: upload.reducer,
//   cart: cart.reducer,
// });

// // const store = configureStore({ reducer });

// // To change from configure store to create when we want to add local storage

// const persistedStateJSON = localStorage.getItem('RekredoReduxState');

// let persistedState = {};

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON);
// }

// const store = createStore(reducer, persistedState, applyMiddleware(thunk));

// store.subscribe(() => {
//   const state = store.getState();
//   const stateToPersist = { user: state.user, cart: state.cart };
//   localStorage.setItem('RekredoReduxState', JSON.stringify(stateToPersist));
// });

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/log-in" element={<Login />} />
        <Route index path="/register" element={<Register />} />
        <Route index path="/account" element={<Account />} />
        <Route index path="/products" element={<Products />} />
        <Route index path="/products/:propid" element={<PropDetails />} />
        <Route index path="/faq" element={<Faq />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/checkout" element={<Checkout />} />
      </Routes>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </Router>
  );
};
