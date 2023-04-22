import { useReducer, createContext } from "react";
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

const DEFAULT_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`unhandled type of ${type} in cart reducer`);
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, DEFAULT_STATE);

  const { isCartOpen, cartItems, cartCount, totalPrice } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCountCartItems = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const totalPriceItems = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalPrice: totalPriceItems,
        cartCount: newCountCartItems,
      },
    });
  };

  const addItemToCart = (productedToAdd) => {
    const newCartItems = addCartItem(cartItems, productedToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (itemToClear) => {
    const newCartItems = clearItemToCart(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (hasCardClicked) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: hasCardClicked,
    });
  };
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
