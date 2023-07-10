import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk(
	"auth/login",
	async ({ email, password  }, thunkAPI) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			}
		};
		const body = JSON.stringify({
			email,
			password,
		});
		try {
			const response = await axios.post(`${process.env.API_URL}/api/auth/jwt/create/`, body, config );

			if (response.status === 200) {
				const { dispatch } = thunkAPI;

				dispatch(GetUser());
				return response.data;
			} else {
				return thunkAPI.rejectWithValue(Error);
			}
		} catch (error) {
			const message =
				(error.response &&
					error.response.data.detail) ||
					error.message ||
					error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const GetUser = createAsyncThunk(
	"auth/getUser",
	async (_, thunkAPI) => {
		if (localStorage.getItem('access')) {
			const config = {
				headers: {
					'Authorization': `JWT ${localStorage.getItem('access')}`,
					'Content-Type': 'application/json',
				}
			};

			try {
				const response = await axios.get(`${process.env.API_URL}/api/auth/users/me/`, config );
				if (response.status === 200) {
					localStorage.setItem('user', JSON.stringify(response.data));
					return response.data;
				} else {
					return thunkAPI.rejectWithValue(Error);
				}
			} catch (error) {
				const message =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				return thunkAPI.rejectWithValue(message);
			}
		}
	}
);