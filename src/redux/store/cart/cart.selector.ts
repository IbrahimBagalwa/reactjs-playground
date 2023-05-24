import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

export const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);
export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cartIsOpenSlice) => cartIsOpenSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
