import { Button } from "../ui";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.js";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux/store/cart/cart.action";
import { selectCartItems } from "../../redux/store/cart/cart.selector";
import { useCallback } from "react";

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  }, []);

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
