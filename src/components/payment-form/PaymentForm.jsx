import { CardElement } from "@stripe/react-stripe-js";
import { Button } from "../ui";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/Button";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button buttonTypes={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
    </div>
  );
};

export default PaymentForm;
