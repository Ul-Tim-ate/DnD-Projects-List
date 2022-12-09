import React, { FC } from "react";
import TusksList from "../../tusks/tusks-list/tusks-list";
import "./dashboard-item.sass";

interface DashboardItemProps {
  key: string;
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: {
    id: string;
    content: string;
  }[];
}

const DashboardItem: FC<DashboardItemProps> = (props) => {
  return (
    <li className="dashboard-item">
      <h3 className="dashboard-item__header">{props.column.title}</h3>
      <div className="dashboard-item__list">
        <TusksList {...props} />
      </div>
    </li>
  );
};

export default DashboardItem;
