import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { StoreProvider } from "./store/data";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import { PersistGate } from "redux-persist/integration/react";
import { StrictMode } from "react";
// import ThemeProvider from "react-bootstrap/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <StrictMode>
        <StoreProvider>
          {/* <ThemeProvider> */}
          <App />
          {/* </ThemeProvider> */}
        </StoreProvider>
      </StrictMode>
    </PersistGate>
  </Provider>
);

// reportWebVitals();
