import { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../../context/cart-context";

const CheckoutItem = ({ cartItems }) => {
  const { imageUrl, name, quantity, price } = cartItems;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItems);
  const removeItemeHandler = () => removeItemFromCart(cartItems);
  const addItemHandler = () => addItemToCart(cartItems);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={removeItemeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
