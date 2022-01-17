import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { combineReducers, createStore } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { user } from "../src/reducers/user";

import Start from "./pages/Start";

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
                    <Route index path="/" element={<Start />} />
                </Routes>
            </Router>
        </Provider>
    );
};


