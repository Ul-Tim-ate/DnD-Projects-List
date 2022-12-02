import React from "react";
import authService from "../../services/authService";
import "./header.sass";


const Header = () => {
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
