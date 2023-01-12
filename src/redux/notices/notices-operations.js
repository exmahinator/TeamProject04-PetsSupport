import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/notices';

export const getNoticeByCategory = createAsyncThunk(
	'notices/getNoticeByCategory',
	async (params, { rejectWithValue, getState }) => {
		const {notices: {page, category}} = getState()
		try {
			const result = await api.getNoticeByCategory({page, category});
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

export const getOneNotice = createAsyncThunk(
	'notices/getOneNotice',
	async (id, { rejectWithValue }) => {
		try {
			const result = await api.getOneNotice(id);
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

export const addNoticeToFavorite = createAsyncThunk(
	'notices/addNoticeToFavorite',
	async (id, { rejectWithValue }) => {
		try {
			const result = await api.addNoticeToFavorite(id);
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

export const getFavoriteNoticeForCategories = createAsyncThunk(
	'notices/getFavoriteNoticeForCategories',
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getFavoriteNotices();
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

export const getFavoriteNoticeByUser = createAsyncThunk(
	'notices/getFavoriteNoticeByUser',
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getFavoriteNotices();
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

export const removeNoticeFromFavorite = createAsyncThunk(
	'notices/removeNoticeFromFavorite',
	async (id, { rejectWithValue }) => {
		try {
			const result = await api.removeNoticeFromFavorite(id);
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

export const addNotice = createAsyncThunk(
	'notices/addNotice',
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.addNotice(data);
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

export const getUserNotices = createAsyncThunk(
	'notices/getUserNotices',
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getUserNotices();
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

export const removeNotice = createAsyncThunk(
	'notices/removeNotice',
	async (id, { rejectWithValue }) => {
		try {
			const result = await api.removeNotice(id);
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
