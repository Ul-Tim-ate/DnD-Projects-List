import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ServicesContext } from "../..";
import { createSetUserAction } from "../../redux/actions/userActionCreator";
import "./header.sass";
import back from "./back.svg";

const Header = () => {
  const { authService } = useContext(ServicesContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const signOut = () => {
    authService.signOut().then();
    dispatch(createSetUserAction({ id: "" }));
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        {id ? (
          <Link className="header__back" to="/projects">
            <img
              src={back}
              alt="Вернуться к списку проектов"
              className="header__img"
            />
          </Link>
        ) : null}
        <button className="header__logout" onClick={signOut}>
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
