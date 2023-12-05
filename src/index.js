import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rent-car-app">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
