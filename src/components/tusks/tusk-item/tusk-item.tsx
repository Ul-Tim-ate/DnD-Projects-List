import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./tusk-item.sass";

interface TuskItemProps {
  id: string;
  header: string;
  index: number;
}

const TuskItem: FC<TuskItemProps> = ({ id, header, index }) => {
  return (
    <div
      onClick={() => {
        console.log(id);
      }}
    >
      <Draggable draggableId={id} index={index}>
        {(provided) => {
          return (
            <li
              className="tusk-item"
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              {header}
            </li>
          );
        }}
      </Draggable>
    </div>
  );
};

export default TuskItem;
