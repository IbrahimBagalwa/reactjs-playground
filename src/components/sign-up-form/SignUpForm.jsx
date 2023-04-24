import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";
import { Button, FormInput } from "../ui";
import "./signup.scss";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [person, setPerson] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = person;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
    }
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setPerson(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exist");
      } else {
        console.log(error);
      }
    }
  };
  console.log("Sign up");
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
