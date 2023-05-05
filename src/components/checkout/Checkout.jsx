import CheckoutItem from "./checkout-item/CheckoutItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/store/cart/cart.selector";
import {
  BlockHeader,
  CheckoutContainer,
  CheckoutHeader,
  Total,
} from "./checkout.style";
import PaymentForm from "../payment-form/PaymentForm";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <BlockHeader>
          <span>Product</span>
        </BlockHeader>
        <BlockHeader>
          <span>Description</span>
        </BlockHeader>
        <BlockHeader>
          <span>Quantity</span>
        </BlockHeader>
        <BlockHeader>
          <span>Price</span>
        </BlockHeader>
        <BlockHeader>
          <span>Remove</span>
        </BlockHeader>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItems={cartItem} />
      ))}
      <Total>Total: ${totalPrice}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
