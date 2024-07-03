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

    if (user.password < 6) {
      toast.warning("Password must be at least 6");
      return;
    }
    if (user.password !== user.confirmPassword) {
      toast.warning("Password mismatch.");
      return;
    }

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
      console.log(error);
      toast.error(error?.response?.data?.message);
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
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
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
