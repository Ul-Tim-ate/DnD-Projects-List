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
  getTasks: boolean;
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
  getTasks: false,
} as TusksState;

const tusker = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case TusksActionTypes.SET_TUSKS:
      return { ...payload };
    case TusksActionTypes.CHANGE_STATUS_TASK_SUCCEED:
      const newState: TusksState = JSON.parse(JSON.stringify(state));
      newState.tasks.push(payload);
      newState.columns[0].taskIds.push(payload.id);
      return { ...newState };
    case TusksActionTypes.DROP_TASKS:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default tusker;
