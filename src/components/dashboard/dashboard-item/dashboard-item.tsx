import React, { FC } from "react";
import { DashBoardHeaders } from "../../../types/dashboard";
import TusksList from "../../tusks/tusks-list/tusks-list";
import "./dashboard-item.sass";

interface DashboardItemProps {
  columnName: DashBoardHeaders;
}

const DashboardItem: FC<DashboardItemProps> = ({ columnName }) => {
  return (
    <li className="dashboard-item">
      <h3 className="dashboard-item__header">{columnName}</h3>
      <div className="dashboard-item__list">
        <TusksList/>
      </div>
    </li>
  );
};

export default DashboardItem;
