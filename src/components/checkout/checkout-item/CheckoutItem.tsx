import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../../redux/store/cart/cart.action";
import { selectCartItems } from "../../../redux/store/cart/cart.selector";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.style";
import { CartItem } from "../../../redux/store/cart/cart.types";
import { FC } from "react";
type CheckoutItemProps = {
  cartItems: CartItem;
};
const CheckoutItem: FC<CheckoutItemProps> = ({ cartItems }) => {
  const { imageUrl, name, quantity, price } = cartItems;
  const dispatch = useDispatch();
  const cartItemsSelctor = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItemsSelctor, cartItems));
  const removeItemeHandler = () =>
    dispatch(removeItemFromCart(cartItemsSelctor, cartItems));
  const addItemHandler = () =>
    dispatch(addItemToCart(cartItemsSelctor, cartItems));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemeHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Arrow>{price}</Arrow>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
