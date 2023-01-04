import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/user';

export const getUserData = createAsyncThunk(
	'user/getUserData',
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.getUserData();
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

export const updateUserData = createAsyncThunk(
	'user/updateUserData',
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.updateUserData(data);
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

export const addUserPet = createAsyncThunk(
	'user/addUserPet',
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.addUserPet(data);
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

export const removeUserPet = createAsyncThunk(
	'user/removeUserPet',
	async (id, { rejectWithValue }) => {
		try {
			const result = await api.removeUserPet(id);
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
