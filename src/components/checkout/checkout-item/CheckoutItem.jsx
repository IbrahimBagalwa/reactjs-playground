import { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../../context/cart-context";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../../redux/store/cart/cart.action";
import { selectCartItems } from "../../../redux/store/cart/cart.selector";

const CheckoutItem = ({ cartItems }) => {
  const { imageUrl, name, quantity, price } = cartItems;
  const dispatch = useDispatch();
  const cartItemsSelctor = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItemsSelctor, cartItems));
  const removeItemeHandler = () =>
    dispatch(removeItemFromCart(cartItemsSelctor, cartItems));
  const addItemHandler = () =>
    dispatch(addItemToCart(cartItemsSelctor, cartItems));

  console.log("Check out Item");
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
