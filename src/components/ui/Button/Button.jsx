import {
  BaseButton,
  GoogleSignedInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignedInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonTypes, ...buttonOptions }) => {
  const CustomButton = getButtonType(buttonTypes);
  return <CustomButton {...buttonOptions}>{children}</CustomButton>;
};

export default Button;
