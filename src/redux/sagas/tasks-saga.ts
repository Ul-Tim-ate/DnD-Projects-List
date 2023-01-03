import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { dbService } from "../..";
import { ProjectActionType } from "../../types/project/project-action";
import { ProjectActionTypes } from "../../types/project/project-action-types";
import { Task } from "../../types/tusks/task";
import { TusksActionTypes } from "../../types/tusks/tusks-actions";
import { UserProject } from "../../types/user-project";
import {
  projectCreateSuccess,
  setUserProjectsAction,
} from "../actions/projectActionCreator";

function* createTaskSaga({ type, payload }: { type: string; payload: Task }) {
  const { taskID, taskName } = yield call(dbService.createTask, payload);
  // yield put(projectCreateSuccess(projectName, projectID));
}

function* fetchUserProjectsSaga(action: ProjectActionType) {
  const userProjects: UserProject[] = yield dbService.getAllUserProjects();
  yield put(setUserProjectsAction(userProjects));
}

function* watchCreateTaskSaga() {
  yield takeLatest(TusksActionTypes.CREATE_TASK, createTaskSaga);
}

function* watchFetchTasksSaga() {
  yield takeLatest(TusksActionTypes.FETCH_TASKS, fetchUserProjectsSaga);
}

export default function* watchTasksSaga() {
  yield all([watchFetchTasksSaga(), watchCreateTaskSaga()]);
}
