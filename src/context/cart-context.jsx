import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains productToAdd ID
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //   if found increment quantity
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //   return new array with modified cartItems or new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItemToRemove = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingCartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItemToCart = (cartItems, itemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  totalPrice: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addItemToCart = (productedToAdd) => {
    setCartItems(addCartItem(cartItems, productedToAdd));
  };
  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const clearItemFromCart = (itemToClear) =>
    setCartItems(clearItemToCart(cartItems, itemToClear));

  useEffect(() => {
    let newCountCartItems = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCountCartItems);
  }, [cartItems]);

  useEffect(() => {
    let totalPriceItems = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(totalPriceItems);
  }, [cartItems]);
  let value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
