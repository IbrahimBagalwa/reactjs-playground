import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon-styles.jsx";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux/store/cart/cart.action";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../redux/store/cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartIsOpen);

  const handleOpenCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={handleOpenCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
