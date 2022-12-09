import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ServicesContext } from "../..";
import { createSetUserAction } from "../../redux/actions/userActionCreator";
import "./header.sass";

const Header = () => {
  const { authService } = useContext(ServicesContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    authService.signOut();
    dispatch(createSetUserAction({ id: "" }));
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        <button className="header__logout" onClick={signOut}>
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
