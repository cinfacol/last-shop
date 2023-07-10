import { createSlice } from "@reduxjs/toolkit";
import { Login, GetUser } from "./authService";

const initialState = {
	// user: user || null,
  user: null,
  isError: false,
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  isPassReset: false,
  isPassResetSend: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isLoggedIn = true;
				state.user = action.payload;
			})
			.addCase(Login.rejected, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
      .addCase(GetUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(GetUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = true;
				state.user = action.payload;
			})
			.addCase(GetUser.rejected, (state, action) => {
				state.isLoading = false;
				state.message = action.payload;
				state.isError = true;
				state.user = null;
			})
  }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;