import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/Button";
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-fom.style";
import { selectCartTotal } from "../../redux/store/cart/cart.selector";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/store/user/user.selector";
import { FormEvent, useState } from "react";
import { StripeCardElement } from "@stripe/stripe-js";

const isValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe && !elements) return;

    setIsProcessingPayment(true);
    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = res;

    const cardDetails = elements && elements.getElement(CardElement);
    if (!isValidCardElement(cardDetails)) return;
    if (stripe == null) return;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      console.log(paymentResult.error);
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment :</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonTypes={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
