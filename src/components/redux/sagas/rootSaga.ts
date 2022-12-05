import { takeEvery, call, put } from "@redux-saga/core/effects";
import { dbService } from "../../..";
import { ProjectActionType } from "../../../types/project-redux/project-action";
import { ProjectActionTypes } from "../../../types/project-redux/project-action-types";
import {
  projectCreateSuccess,
} from "../actions/projectActionCreator";

export function* createProjectSaga(action: ProjectActionType) {
  const { projectID, projectName } = yield call(
    dbService.createProject,
    action.payload
  );
  yield put(projectCreateSuccess(projectName, projectID));
}

export function* watchClickSaga() {
  yield takeEvery(ProjectActionTypes.CREATE_PROJECT, createProjectSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
