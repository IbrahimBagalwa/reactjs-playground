import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./context/user-context";
import "./index.scss";
import CategoriesContextProvider from "./context/categories-context";
import CartProvider from "./context/cart-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
