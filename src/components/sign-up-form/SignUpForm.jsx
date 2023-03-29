import { useState } from "react";
import "./signin.scss";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";
const SignUpForm = () => {
  const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [person, setPerson] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = person;
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
      await createUserDocumentFromAuth(user, { name });
      setPerson(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exist");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Display name</label>
        <input
          onChange={onChangeHandler}
          name="name"
          value={name}
          type="text"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={onChangeHandler}
          type="email"
          name="email"
          value={email}
          required
        />

        <label htmlFor="pasword">Password</label>
        <input
          onChange={onChangeHandler}
          type="password"
          name="password"
          value={password}
          required
        />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          onChange={onChangeHandler}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
