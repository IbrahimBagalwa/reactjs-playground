import "./checkout.scss";
import CheckoutItem from "./checkout-item/CheckoutItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/store/cart/cart.selector";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItems={cartItem} />
      ))}
      <div className="total">Total: ${totalPrice}</div>
    </div>
  );
};

export default Checkout;
