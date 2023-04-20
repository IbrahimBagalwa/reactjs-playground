import { useContext } from "react";
import CartItem from "../cart-item/cartItem";
import { Button } from "../ui";
import "./cart-dropdown.scss";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
