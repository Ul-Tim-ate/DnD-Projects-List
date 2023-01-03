import { all } from "@redux-saga/core/effects";
import watchProjectsSaga from "./projects-saga";
import watchTasksSaga from "./tasks-saga";

export default function* rootSaga() {
  yield all([watchProjectsSaga(), watchTasksSaga()]);
}
