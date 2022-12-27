import { all } from "redux-saga/effects";
import { watcherUser } from "./authSaga";

export function* rootSaga() {
  yield all([watcherUser()]);
}
