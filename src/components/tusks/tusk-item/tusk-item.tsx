import React, { FC, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../../types/tusks/task";
import MyModal from "../../UI/my-modal/my-modal";
import TaskDetailed from "../task-detailed/task-detailed";
import "./tusk-item.sass";

interface TuskItemProps {
  task: Task;
  index: number;
}

const TuskItem: FC<TuskItemProps> = ({ task, index }) => {
  const [taskModalActive, setTaskModalActive] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setTaskModalActive(true);
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
      <MyModal active={taskModalActive} setActive={setTaskModalActive}>
        <TaskDetailed task={task} />
      </MyModal>
    </div>
  );
};

export default TuskItem;
