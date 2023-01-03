import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Task } from "../../../types/tusks/task";
import MySpinner from "../../UI/my-spinner/my-spinner";
import DashboardItem from "../dashboard-item/dashboard-item";
import "./dashboard.sass";

const Dashboard = () => {
  const state = useTypedSelector((state) => state.tusker);
  if (!state.getTasks) {
    return (
      <div className="dashboard-table__spinner">
        <MySpinner />
      </div>
    );
  }
  return (
    <ul className="dashboard-table">
      {state.columnOrder.map((columnId) => {
        const column = state.columns.find((element) => element.id === columnId);
        if (column) {
          const tasks = column.taskIds.map((taskId) => {
            const task = state.tasks.find((element) => element.id === taskId);
            if (!task) {
              return {} as Task;
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
