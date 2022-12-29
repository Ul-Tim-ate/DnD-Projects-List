import React, { FC, useContext } from "react";
import { ServicesContext } from "../..";
import "./auth.sass";

interface AuthProps {
  user: string;
}

const Auth: FC<AuthProps> = ({ user }) => {
  const { authService } = useContext(ServicesContext);
  const login = () => {
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
