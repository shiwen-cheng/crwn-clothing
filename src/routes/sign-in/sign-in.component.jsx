import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    // console.log(res);
    const userDocRef = await createUserDocumentFromAuth(res.user);
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
