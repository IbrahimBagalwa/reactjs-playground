import { ChangeEvent, FormEvent, useState } from "react";

import { Button, FormInput } from "../ui";
import "./signup.scss";
import { signUpStart } from "../../redux/store/user/user.action";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [person, setPerson] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = person;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      setPerson(defaultFormFields);
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("User already exist");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>You don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
          type="text"
          required
        />
        <FormInput
          label="Email"
          onChange={onChangeHandler}
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          onChange={onChangeHandler}
          type="password"
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm password"
          onChange={onChangeHandler}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
