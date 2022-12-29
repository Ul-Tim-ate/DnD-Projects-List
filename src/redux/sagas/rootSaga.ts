import { all } from "@redux-saga/core/effects";
import watchProjectsSaga from "./projects-saga";

export default function* rootSaga() {
  yield all([watchProjectsSaga()]);
}
