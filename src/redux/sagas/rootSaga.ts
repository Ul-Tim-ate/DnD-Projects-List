import { takeEvery, call, put, all } from "@redux-saga/core/effects";
import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { dbService } from "../..";
import { ProjectActionType } from "../../types/project-redux/project-action";
import { ProjectActionTypes } from "../../types/project-redux/project-action-types";
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
  yield takeEvery(ProjectActionTypes.CREATE_PROJECT, createProjectSaga);
}

function* watchFetchUserProjectsSaga() {
  yield takeEvery(
    ProjectActionTypes.FETCH_USER_PROJECTS,
    fetchUserProjectsSaga
  );
}

export default function* rootSaga() {
  yield all([watchCreateProjectSaga(), watchFetchUserProjectsSaga()]);
}
