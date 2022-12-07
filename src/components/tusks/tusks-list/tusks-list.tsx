import React from "react";
import TuskItem from "../tusk-item/tusk-item";
import "./tusks-list.sass";

const TusksList = () => {
  return (
    <ul className="tusks-list">
      <TuskItem tuskName="Попить кофе"/>
      <TuskItem tuskName="Попить кофе"/>
      <TuskItem tuskName="Попитьывфыфвфывфывыфвфыв"/>
      <TuskItem tuskName="Попить кофе"/>
    </ul>
  );
};

export default TusksList;
