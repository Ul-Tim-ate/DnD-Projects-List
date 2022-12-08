import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./tusk-item.sass";

interface TuskItem {
  id: string;
  content: string;
  index: number;
}

const TuskItem: FC<TuskItem> = ({ id, content, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <li
            className="tusk-item"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {content}
          </li>
        );
      }}
    </Draggable>
  );
};

export default TuskItem;
