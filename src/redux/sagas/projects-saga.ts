import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { dbService } from "../..";
import { ProjectActionType } from "../../types/project/project-action";
import { ProjectActionTypes } from "../../types/project/project-action-types";
import { UserProject } from "../../types/user-project";
import {
  projectCreateSuccess,
  setUserProjectsAction,
} from "../actions/projectActionCreator";

function* createProjectSaga(action: ProjectActionType) {
  const { projectID, projectName } = yield call(
    dbService.createProject,
    action.payload
  );
  yield put(projectCreateSuccess(projectName, projectID));
}

function* fetchUserProjectsSaga(action: ProjectActionType) {
  const userProjects: UserProject[] = yield dbService.getAllUserProjects();
  yield put(setUserProjectsAction(userProjects));
}

function* watchCreateProjectSaga() {
  yield takeLatest(ProjectActionTypes.CREATE_PROJECT, createProjectSaga);
}

function* watchFetchUserProjectsSaga() {
  yield takeLatest(
    ProjectActionTypes.FETCH_USER_PROJECTS,
    fetchUserProjectsSaga
  );
}

export default function* watchProjectsSaga() {
  yield all([watchCreateProjectSaga(), watchFetchUserProjectsSaga()]);
}
