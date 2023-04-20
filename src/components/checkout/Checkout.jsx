import { useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../context/cart-context";
import CheckoutItem from "./checkout-item/CheckoutItem";
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

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
