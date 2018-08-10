import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import initialState from "./initialState.json";
import reducers from "./Reducers";

let store = createStore(reducers, initialState);

store.subscribe(() => console.log("FUCKITY FUCK"));

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
