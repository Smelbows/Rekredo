import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { combineReducers, createStore } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { user } from "../src/reducers/user";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import PropDetails from "./pages/PropDetails";


import "./App.css";

const reducer = combineReducers({
    user: user.reducer,
});

const store = configureStore({ reducer });

// To change from configure store to create when we want to add local storage
// const persistedStateJSON = localStorage.getItem("nameReduxState");
// let persistedState = {};

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON);
// }

// store.subscribe(() => {
//   localStorage.setItem("nameReduxState", JSON.stringify(store.getState()));
// });

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route index path="/" element={<Home />}/>  
                    <Route index path="/log-in" element={<Login />}/>  
                    <Route index path="/register" element={<Register />}/> 
                    <Route index path="/account" element={<Account />}/>   
                    <Route index path="/products" element={<Products />}/> 
                    <Route index path="/products/:propid" element={<PropDetails />}/>  
                    <Route index path="/faq" element={<Faq />}/>             
                    <Route index path="/contact" element={<Contact />}/>                    
                    <Route index path="/checkout" element={<Checkout />}/>                    
                </Routes>
            </Router>
        </Provider>
    );
};


