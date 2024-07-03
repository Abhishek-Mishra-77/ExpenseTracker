import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { toast } from "react-toastify";
import axios from "axios";
import { REACT_IP, SERVER_PORT } from "../../services/common";
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
    try {
      const response = await axios.post(
        `http://${REACT_IP}:${SERVER_PORT}/auth/create`,
        { user }
      );
      console.log(response);
      setUser((prev) => ({
        ...prev,
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }));
      toast.success("Sign up successfully.");
      setIsAuthPage(false);
    } catch (error) {
      toast.error("Unable to Signup.");
    }
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://${REACT_IP}:${SERVER_PORT}/auth/login`,
        { user }
      );
      console.log(response);
      setUser((prev) => ({
        ...prev,
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }));
      toast.success("Sign in successfully.");
    } catch (error) {
      toast.error("Unable to Signin.");
    }
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
