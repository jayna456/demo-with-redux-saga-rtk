const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      console.log("state");
    },
    loginSuccess(state, action) {
      state.user = action.payload;
    },
    loginFail: (state) => {},
    logoutUser(state) {
      state.user = {};
    },
  },
});

export const { loginRequest, logoutUser, loginSuccess, loginFail } =
  authSlice.actions;
export default authSlice.reducer;
