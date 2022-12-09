import React, { useState } from "react";
import initialData from "../../../init-data";
import DashboardItem from "../dashboard-item/dashboard-item";
import "./dashboard.sass";

const Dashboard = () => {
  const [state] = useState(initialData);
  return (
    <ul className="dashboard-table">
      {state.columnOrder.map((columnId) => {
        const column = state.columns.find((element) => element.id === columnId);
        if (column) {
          const tasks = column.taskIds.map((taskId) => {
            const task = state.tasks.find((element) => element.id === taskId);
            if (task) {
              return task;
            } else
              return {
                id: "",
                content: "",
              };
          });
          return (
            <DashboardItem key={column.id} column={column} tasks={tasks} />
          );
        }
      })}
      {/* <DashboardItem columnName={DashBoardHeaders.QUEUE} />
      <DashboardItem columnName={DashBoardHeaders.DEVELOPMENT} />
      <DashboardItem columnName={DashBoardHeaders.DONE} /> */}
    </ul>
  );
};

export default Dashboard;
