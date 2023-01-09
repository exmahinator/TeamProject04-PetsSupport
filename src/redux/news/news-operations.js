import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/news';

export const getAllNews = createAsyncThunk(
	'news/getAllNews',
	async (options, { rejectWithValue }) => {

		try {
			const result = await api.getAllNews(options);
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
