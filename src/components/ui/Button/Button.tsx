import {
  BaseButton,
  ButtonSpinner,
  GoogleSignedInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
type ButtonProps = {
  buttonTypes?: string;
  isLoading?: boolean;
  buttonOptions: object;
  children: JSX.Element;
};
const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base): void =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignedInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({
  children,
  buttonTypes,
  isLoading,
  ...buttonOptions
}: ButtonProps) => {
  const CustomButton = getButtonType(buttonTypes);
  return (
    <CustomButton disabled={isLoading} {...buttonOptions}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
