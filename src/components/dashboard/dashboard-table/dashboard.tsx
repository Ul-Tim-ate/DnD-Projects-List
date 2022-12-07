import React from "react";
import { DashBoardHeaders } from "../../../types/dashboard";
import DashboardItem from "../dashboard-item/dashboard-item";
import "./dashboard.sass";

const Dashboard = () => {
  return (
    <ul className="dashboard-table">
      <DashboardItem columnName={DashBoardHeaders.QUEUE} />
      <DashboardItem columnName={DashBoardHeaders.DEVELOPMENT} />
      <DashboardItem columnName={DashBoardHeaders.DONE} />
    </ul>
  );
};

export default Dashboard;
