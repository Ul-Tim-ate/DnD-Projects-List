import React, { FC } from "react";
import "./my-input.sass";

interface MyInputProps {
  id: string;
}

const MyInput: FC<MyInputProps> = ({ id }) => {
  return (
    <div className="my-input">
      <label className="my-input__label" htmlFor={id}>
        Поиск
      </label>
      <input
        className="my-input__input"
        id={id}
        type="text"
        placeholder="Введите номер или заголовок задачи"
      />
    </div>
  );
};

export default MyInput;
