import React, { FC } from "react";
import "./my-modal.sass";

interface MyModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const MyModal: FC<MyModalProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "my-modal active" : "my-modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "my-modal__content active" : "my-modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
