import React, { useContext } from "react";
import { ServicesContext } from "../..";
import AuthService from "../../services/authService";
import "./auth.sass";

const Auth = () => {
  const { authService } = useContext(ServicesContext);
  const login = async () => {
    authService.signInWithGoogle();
  };

  return (
    <div className="auth">
      <button className="auth__btn" onClick={login}>
        Авторизоваться через Google
      </button>
    </div>
  );
};

export default Auth;
