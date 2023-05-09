import { FC } from "react";
import { CartItem as ITCartItem } from "../../redux/store/cart/cart.types";
import { CartItemContainer, Name, ItemDetails } from "./cart-item.style";

export type CartItemProps = {
  cartItem: ITCartItem;
};
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
