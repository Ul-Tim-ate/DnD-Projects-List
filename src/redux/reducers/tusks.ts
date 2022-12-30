import { DashBoardHeaders } from "../../types/dashboard";
import { TusksActionTypes } from "../../types/tusks/tusks-actions";

interface Tusk {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface TusksState {
  tasks: Tusk[];
  columns: Column[];
  columnOrder: string[];
}

const initialState = {
  tasks: [
    { id: "task-1", content: "Take out the garbage" },
    { id: "task-2", content: "Watch my favorite show" },
    { id: "task-3", content: "Charge my phone" },
    { id: "task-4", content: "Cook dinner" },
    { id: "task-5", content: "Cook lunch" },
    { id: "task-6", content: "Cook coffee" },
  ],
  columns: [
    {
      id: DashBoardHeaders.QUEUE,
      title: DashBoardHeaders.QUEUE,
      taskIds: ["task-1", "task-2", "task-5", "task-6"],
    },
    {
      id: DashBoardHeaders.DEVELOPMENT,
      title: DashBoardHeaders.DEVELOPMENT,
      taskIds: ["task-4"],
    },
    {
      id: DashBoardHeaders.DONE,
      title: DashBoardHeaders.DONE,
      taskIds: ["task-3"],
    },
  ],
  columnOrder: [
    DashBoardHeaders.QUEUE,
    DashBoardHeaders.DEVELOPMENT,
    DashBoardHeaders.DONE,
  ],
} as TusksState;

const tusker = (
  state = initialState,
  { type, payload }: { type: string; payload: TusksState }
) => {
  switch (type) {
    case TusksActionTypes.SET_TUSKS:
      return {...payload};
    default:
      return state;
  }
};

export default tusker;
