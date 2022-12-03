import React from "react";
import './add-project-form.sass'

const AddProjectForm = () => {
  return (
    <form className="add-project-form">
      <label className="add-project-form__label" htmlFor="name">
        Название проекта
      </label>
      <input
        className="add-project-form__input"
        id="name"
        type="text"
        placeholder="Введите название проекта"
      />
      <div className="add-project-form__buttons">
        <button className="add-project-form__button">Отправить</button>
        <button className="add-project-form__button">Отмена</button>
      </div>
    </form>
  );
};

export default AddProjectForm;
