import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Auth = () => {
  const [isAuthPage, setIsAuthPage] = useState(false);
  return (
    <>
      {isAuthPage ? (
        <SignUp setIsAuthPage={setIsAuthPage} />
      ) : (
        <SignIn setIsAuthPage={setIsAuthPage} />
      )}
    </>
  );
};

export default Auth;
