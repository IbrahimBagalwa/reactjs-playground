import { SignInForm } from "../../components/sign-in-form";
import { SignUpForm } from "../../components/sign-up-form";
import "./auth.style.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
