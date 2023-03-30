import "./button.styles.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonTypes, ...buttonOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`}
      {...buttonOptions}
    >
      {children}
    </button>
  );
};

export default Button;
