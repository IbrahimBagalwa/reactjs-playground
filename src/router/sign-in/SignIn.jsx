import { signInWithGooglePopup } from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };

  return (
    <>
      <div>SignIn page</div>
      <button onClick={logGoogleUser}>Sign-In with google account</button>
    </>
  );
};

export default SignIn;
