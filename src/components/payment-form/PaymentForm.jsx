import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../ui";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/Button";
import { FormContainer, PaymentFormContainer } from "./payment-fom.style";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe && !elements) return;
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment :</h2>
        <CardElement />
        <Button buttonTypes={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
