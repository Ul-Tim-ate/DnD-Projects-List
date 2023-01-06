import React, { FC } from "react";
import "./my-input.sass";

interface MyInputProps {
  id: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
}

const MyInput: FC<MyInputProps> = ({ id, searchText, setSearchText }) => {
  return (
    <div className="my-input">
      <label className="my-input__label" htmlFor={id}>
        Поиск
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.currentTarget.value);
        }}
        className="my-input__input"
        id={id}
        value={searchText}
        type="text"
        placeholder="Введите заголовок задачи"
      />
    </div>
  );
};

export default MyInput;
