import { DashBoardHeaders } from "../../types/dashboard";
import { Task } from "../../types/tusks/task";
import { TusksActionTypes } from "../../types/tusks/tusks-actions";
import { TusksState } from "../reducers/tusks";

export const setTusksAction = (tuskList: TusksState) => {
  return { type: TusksActionTypes.SET_TUSKS, payload: tuskList };
};

export const createTaskAction = (task: Task) => {
  return { type: TusksActionTypes.CREATE_TASK, payload: { ...task } };
};

export const getTusksAction = (projectId: string) => {
  return { type: TusksActionTypes.FETCH_TASKS, payload: projectId };
};

export const dropTusksAction = () => {
  return { type: TusksActionTypes.DROP_TASKS };
};

export const updateStatusTaskAction = (taskId: string, status: string) => {
  return {
    type: TusksActionTypes.CHANGE_STATUS_TASK,
    payload: { taskId, status },
  };
};

export const updateStatusTaskSucceedAction = (
  taskId: string,
  status: string
) => {
  return {
    type: TusksActionTypes.CHANGE_STATUS_TASK_SUCCEED,
    payload: { taskId, status },
  };
};
