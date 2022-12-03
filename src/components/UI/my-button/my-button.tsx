import React, { FC } from "react";
import "./my-button.sass";

interface MyButtonProps {
  value: string;
}

const MyButton: FC<MyButtonProps> = ({value}) => {
  return <button className="my-button">{value}</button>;
};

export default MyButton;
