import { useContext } from "react";
import { Button } from "../ui";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
