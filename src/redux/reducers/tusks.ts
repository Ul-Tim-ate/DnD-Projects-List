import { DashBoardHeaders } from "../../types/dashboard";
import { Task } from "../../types/tusks/task";
import { TusksActionTypes } from "../../types/tusks/tusks-actions";

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface TusksState {
  tasks: Task[];
  columns: Column[];
  columnOrder: string[];
}

const initialState = {
  tasks: [],
  columns: [
    {
      id: DashBoardHeaders.QUEUE,
      title: DashBoardHeaders.QUEUE,
      taskIds: [],
    },
    {
      id: DashBoardHeaders.DEVELOPMENT,
      title: DashBoardHeaders.DEVELOPMENT,
      taskIds: [],
    },
    {
      id: DashBoardHeaders.DONE,
      title: DashBoardHeaders.DONE,
      taskIds: [],
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
      return { ...payload };
    case TusksActionTypes.CREATE_TASK:
      return { ...state };
    case TusksActionTypes.DROP_TASKS:
      return { ...initialState };
    default:
      return state;
  }
};

export default tusker;
