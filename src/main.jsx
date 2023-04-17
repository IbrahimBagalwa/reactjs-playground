import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./context/context";
import "./index.scss";
import ProductContextProvider from "./context/product-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
