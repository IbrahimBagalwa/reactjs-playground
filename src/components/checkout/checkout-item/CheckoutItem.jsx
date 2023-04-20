import { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../../context/cart-context";

const CheckoutItem = ({ cartItems }) => {
  const { id, imageUrl, name, quantity, price } = cartItems;
  const { removeItemToCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} className="image-container" />

      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => decreaseQuantity(id)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => increaseQuantity(id)}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItemToCart(id)}>
        &#10006;
      </span>
    </div>
  );
};

export default CheckoutItem;
