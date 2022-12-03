import React, { useContext } from "react";
import { ServicesContext } from "../..";
import authService from "../../services/authService";
import "./header.sass";

const Header = () => {
  const { authService } = useContext(ServicesContext);
  return (
    <header className="header">
      <div className="container">
        <button className="header__logout" onClick={authService.signOut}>
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
