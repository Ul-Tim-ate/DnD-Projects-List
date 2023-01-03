import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import DashboardItem from "../dashboard-item/dashboard-item";
import "./dashboard.sass";

const Dashboard = () => {
  const state = useTypedSelector((state) => state.tusker);
  console.log(state);

  return (
    <ul className="dashboard-table">
      {state.columnOrder.map((columnId) => {
        const column = state.columns.find((element) => element.id === columnId);
        console.log(column);

        if (column) {
          const tasks = column.taskIds.map((taskId) => {
            const task = state.tasks.find((element) => element.id === taskId);
            if (!task) {
              throw new Error("no task");
            }
            return task;
          });
          return (
            <DashboardItem key={column.id} column={column} tasks={tasks} />
          );
        }
      })}
    </ul>
  );
};

export default Dashboard;
