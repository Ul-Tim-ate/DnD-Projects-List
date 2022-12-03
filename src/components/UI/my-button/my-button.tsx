import React, { FC } from "react";
import "./my-button.sass";

interface MyButtonProps {
  value: string;
  activeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyButton: FC<MyButtonProps> = ({ value, activeModal }) => {
  return (
    <button
      className="my-button"
      onClick={() => {
        activeModal(true);
      }}
    >
      {value}
    </button>
  );
};

export default MyButton;
