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
