import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { TusksState } from "../../../redux/reducers/tusks";
import { Task } from "../../../types/tusks/task";
import MySpinner from "../../UI/my-spinner/my-spinner";
import DashboardItem from "../dashboard-item/dashboard-item";
import "./dashboard.sass";

interface DashboardProps {
  tasksState: TusksState;
}

const Dashboard: FC<DashboardProps> = ({ tasksState: state }) => {
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
