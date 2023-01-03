import React, { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../../types/tusks/task";
import TuskItem from "../tusk-item/tusk-item";
import "./tusks-list.sass";

interface TusksListProps {
  key: string;
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: Task[];
}

const TusksList: FC<TusksListProps> = ({ column, key, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => {
        return (
          <ul
            className="tusks-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => {
              return <TuskItem task={task} index={index} key={task.id} />;
            })}
            {provided.placeholder}
          </ul>
        );
      }}
    </Droppable>
  );
};

export default TusksList;
