import "./cart-icon-styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shoping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
