import { ChangeEvent, FormEvent, useState } from "react";
import { Button, FormInput } from "../ui";
import "./sign-in.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/Button";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/store/user/user.action";

const SignInForm = () => {
  const dispatch = useDispatch();
  const defaultInformationField = {
    email: "",
    password: "",
  };
  const [informationUser, setInformationUser] = useState(
    defaultInformationField
  );
  const { email, password } = informationUser;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInformationUser({ ...informationUser, [name]: value });
  };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setInformationUser(defaultInformationField);
    } catch (error) {
      console.log("User failed to sign in", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I'm already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          required
        />
        <FormInput
          label="password"
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonTypes={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
