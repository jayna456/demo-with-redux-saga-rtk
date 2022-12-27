import { put, takeEvery } from "redux-saga/effects";
import { loginRequest, loginSuccess } from "../slice/authSlice";

const avialableUsers = [
  {
    id: 1,
    email: "user1@gmail.com",
    password: "12345",
    name: "user1",
  },
  {
    id: 2,
    email: "user2@gmail.com",
    password: "12345",
    name: "user2",
  },
  {
    id: 3,
    email: "user3@gmail.com",
    password: "12345",
    name: "user3",
  },
];

const loginUser = (payload) => {
  const foundUser = avialableUsers.find(({ email }) => email === payload.email);

  if (foundUser) {
    if (foundUser.password === payload.password) {
      return foundUser;
    }
  } else {
    return { message: "No user found" };
  }
};

function* getLoginUserSaga({ payload }) {
  const user = yield loginUser(payload);

  localStorage.setItem("user", JSON.stringify(user));
  yield put(loginSuccess(user));
}

export function* watcherUser() {
  yield takeEvery(loginRequest, getLoginUserSaga);
}
