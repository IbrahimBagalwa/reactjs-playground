import { ButtonHTMLAttributes, FC } from "react";
import {
  BaseButton,
  ButtonSpinner,
  GoogleSignedInButton,
  InvertedButton,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButtonType = (
  buttonType = BUTTON_TYPE_CLASSES.base
): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignedInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

type ButtonProps = {
  buttonTypes?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonTypes,
  isLoading,
  ...buttonOptions
}) => {
  const CustomButton = getButtonType(buttonTypes);
  return (
    <CustomButton disabled={isLoading} {...buttonOptions}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
