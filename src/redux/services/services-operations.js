import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/services';

export const getAllServices = createAsyncThunk(
	'services/getAllServices',
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getAllServices();
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
