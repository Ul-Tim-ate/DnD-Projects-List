import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { dbService } from "../..";
import { DashBoardHeaders } from "../../types/dashboard";
import { Task } from "../../types/tusks/task";
import { TusksActionTypes } from "../../types/tusks/tusks-actions";
import {
  getTusksAction,
  setTusksAction,
  updateStatusTaskSucceedAction,
} from "../actions/tusksActionCreater";
import { TusksState } from "../reducers/tusks";

function* createTaskSaga({ type, payload }: { type: string; payload: Task }) {
  yield call(dbService.createTask, payload);
}

function* fetchProjectTasksSaga({
  type,
  payload,
}: {
  type: string;
  payload: string;
}) {
  const projectTasks: Task[] = yield dbService.getTasks(payload);
  const queueColumn: string[] = [];
  const devColumn: string[] = [];
  const doneColumn: string[] = [];
  projectTasks.forEach((task) => {
    switch (task.status) {
      case DashBoardHeaders.QUEUE:
        queueColumn.push(task.id);
        break;
      case DashBoardHeaders.DEVELOPMENT:
        devColumn.push(task.id);
        break;
      case DashBoardHeaders.DONE:
        doneColumn.push(task.id);
        break;
      default:
        break;
    }
  });
  const tasksList: TusksState = {
    tasks: projectTasks,
    columns: [
      {
        id: DashBoardHeaders.QUEUE,
        title: DashBoardHeaders.QUEUE,
        taskIds: [...queueColumn],
      },
      {
        id: DashBoardHeaders.DEVELOPMENT,
        title: DashBoardHeaders.DEVELOPMENT,
        taskIds: [...devColumn],
      },
      {
        id: DashBoardHeaders.DONE,
        title: DashBoardHeaders.DONE,
        taskIds: [...doneColumn],
      },
    ],
    columnOrder: [
      DashBoardHeaders.QUEUE,
      DashBoardHeaders.DEVELOPMENT,
      DashBoardHeaders.DONE,
    ],
    getTasks: true,
  };
  yield put(setTusksAction(tasksList));
}

function* changeStatusTaskSaga({
  type,
  payload,
}: {
  type: string;
  payload: { taskId: string; status: DashBoardHeaders };
}) {
  yield call(dbService.changeTaskStatus, payload.taskId, payload.status);
}

function* watchCreateTaskSaga() {
  yield takeLatest(TusksActionTypes.CREATE_TASK, createTaskSaga);
}

function* watchFetchTasksSaga() {
  yield takeLatest(TusksActionTypes.FETCH_TASKS, fetchProjectTasksSaga);
}

function* watchChangeStatusTaskSaga() {
  yield takeLatest(TusksActionTypes.CHANGE_STATUS_TASK, changeStatusTaskSaga);
}

export default function* watchTasksSaga() {
  yield all([
    watchFetchTasksSaga(),
    watchCreateTaskSaga(),
    watchChangeStatusTaskSaga(),
  ]);
}
