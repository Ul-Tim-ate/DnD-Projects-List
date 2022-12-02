import React from "react";
import authService from "../../services/authService";
import "./auth.sass";

const Auth = () => {
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
