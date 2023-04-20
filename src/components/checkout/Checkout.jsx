import { useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../context/cart-context";
import CheckoutItem from "./checkout-item/CheckoutItem";
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItems={cartItem} />
      ))}
      <div className="total">Total: ${totalPrice}</div>
    </div>
  );
};

export default Checkout;
