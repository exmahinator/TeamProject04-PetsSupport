import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth';

export const register = createAsyncThunk(
	'auth/register',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await api.register(data);
			dispatch(login({ email: data.email, password: data.password }));
			return result;
		} catch ({ response }) {
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (data, { rejectWithValue }) => {
		try {
			console.log('gfhgfhgf')
			const result = await api.login(data);
			return result;
		} catch ({ response }) {
			console.log('aaaaa')
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.logout();
			return result;
		} catch ({ response }) {
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);

export const current = createAsyncThunk(
	'auth/current',
	async (_, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState();

			const result = await api.getCurrent(auth.token);
			return result;
		} catch ({ response }) {
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);
