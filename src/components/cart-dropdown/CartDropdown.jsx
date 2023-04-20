import { useContext } from "react";
import CartItem from "../cart-item/cartItem";
import { Button } from "../ui";
import "./cart-dropdown.scss";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
