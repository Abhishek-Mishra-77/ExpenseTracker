import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Auth = () => {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      {isAuthPage ? (
        <SignUp
          setUser={setUser}
          user={user}
          setIsAuthPage={setIsAuthPage}
          onSignUpHandler={onSignUpHandler}
        />
      ) : (
        <SignIn
          onLoginHandler={onLoginHandler}
          user={user}
          setUser={setUser}
          setIsAuthPage={setIsAuthPage}
        />
      )}
    </>
  );
};

export default Auth;
