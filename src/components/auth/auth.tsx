import React, { FC, useContext, useState } from "react";
import { ServicesContext } from "../..";
import MySpinner from "../UI/my-spinner/my-spinner";
import "./auth.sass";

interface AuthProps {
  user: string;
}

const Auth: FC<AuthProps> = ({ user }) => {
  const { authService } = useContext(ServicesContext);
  const [loading, setLoading] = useState(false);  
  if (user) {
    setLoading(false);
  }
  if (loading) {
    return (
      <div className="app__loading">
        <MySpinner />
      </div>
    );
  }
  const login = () => {
    authService.signInWithGoogle();
    setLoading(true);
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
