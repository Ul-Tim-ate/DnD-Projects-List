import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { createProjectAction } from "../../redux/actions/projectActionCreator";
import "./add-project-form.sass";

interface AddProjectFormProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProjectForm: FC<AddProjectFormProps> = ({ setModalActive }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="add-project-form"
      onSubmit={(e) => {
        console.log("submit");
        e.preventDefault();
      }}
    >
      <label className="add-project-form__label" htmlFor="name">
        Название проекта
      </label>
      <input
        className="add-project-form__input"
        id="name"
        type="text"
        value={name}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
        placeholder="Введите название проекта"
      />
      <div className="add-project-form__buttons">
        <button
          className="add-project-form__button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(createProjectAction(name));
            setModalActive(false);
          }}
        >
          Отправить
        </button>
        <button
          className="add-project-form__button"
          onClick={(e) => {
            e.preventDefault();
            setModalActive(false);
          }}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
