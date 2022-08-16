// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  /*   useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []); */

  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    // console.log(res);
    const userDocRef = await createUserDocumentFromAuth(res.user);
  };

  /*   const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    // 因为是 redirect 到谷歌登录页面，再回来的时候，相当于是刷新了网页，就没有保存之前的信息
    console.log(user);
  }; */

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Google Redirect
      </button> */}
      {/*   <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
