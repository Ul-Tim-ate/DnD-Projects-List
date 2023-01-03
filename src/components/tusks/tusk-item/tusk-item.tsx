import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../../types/tusks/task";
import "./tusk-item.sass";

interface TuskItemProps {
  task: Task;
  index: number;
}

const TuskItem: FC<TuskItemProps> = ({ task, index }) => {
  return (
    <div
      onClick={() => {
        console.log(task.id);
      }}
    >
      <Draggable draggableId={task.id} index={index}>
        {(provided) => {
          return (
            <li
              className="tusk-item"
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              {task.header}
            </li>
          );
        }}
      </Draggable>
    </div>
  );
};

export default TuskItem;
