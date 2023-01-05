import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/news';

export const getAllNews = createAsyncThunk(
	'user/getAllNews',
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getAllNews();
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
