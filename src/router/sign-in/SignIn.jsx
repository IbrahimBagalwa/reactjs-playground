import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <>
      <div>SignIn page</div>
      <button onClick={logGoogleUser}>Sign-In with google account</button>
    </>
  );
};

export default SignIn;
