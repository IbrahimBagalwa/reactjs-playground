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
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (productedToAdd) => {
    setCartItems(addCartItem(cartItems, productedToAdd));
  };
  useEffect(() => {
    let newCountCartItems = cartItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCartCount(newCountCartItems);
  }, [cartItems]);
  let value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
