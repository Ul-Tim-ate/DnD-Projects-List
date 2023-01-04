import dayjs from "dayjs";
import React, { FC } from "react";
import { Task } from "../../../types/tusks/task";
import "./task-detailed.sass";

interface TaskDetailedProps {
  task: Task;
}

const TaskDetailed: FC<TaskDetailedProps> = ({ task }) => {
  const { header, description, dateStart, dateFinished } = task;
  const formatDateStart = dayjs(dateStart).format("DD.MM.YYYY");
  const formatDateFinished = dayjs(dateFinished).format("DD.MM.YYYY");
  return (
    <div className="task-detailed">
      <h2 className="task-detailed__header">{header}</h2>
      <p className="task-detailed__description">
        <span className="task-detailed__key">Описание задачи:</span>
        {description}
      </p>
      <span className="task-detailed__start">
        <span className="task-detailed__key">Дата начала задачи:</span>
        {formatDateStart}
      </span>
      <span className="task-detailed__finish">
        <span className="task-detailed__key">Дата окончания задачи:</span>
        {formatDateFinished}
      </span>
    </div>
  );
};

export default TaskDetailed;
