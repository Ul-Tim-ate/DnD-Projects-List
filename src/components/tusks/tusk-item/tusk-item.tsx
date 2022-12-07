import React, { FC } from "react";
import "./tusk-item.sass";

interface TuskItem {
  tuskName: string;
}

const TuskItem: FC<TuskItem> = ({ tuskName }) => {
  return <li className="tusk-item">{tuskName}</li>;
};

export default TuskItem;
