import React, { FC, useContext, useState } from "react";
import { ServicesContext } from "../../..";
import "./add-project-form.sass";

interface AddProjectFormProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProjectForm: FC<AddProjectFormProps> = ({ setModalActive }) => {
  const { dbService } = useContext(ServicesContext);
  const [name, setName] = useState("");
  console.log(name);
  
  return (
    <form
      className="add-project-form"
      onSubmit={(e) => {
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
        <button className="add-project-form__button">Отправить</button>
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
