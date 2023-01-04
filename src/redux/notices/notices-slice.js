import { createSlice } from '@reduxjs/toolkit';

import {
	getNoticeByCategory,
	// getOneNotice,
	addNoticeToFavorite,
	getFavoriteNotices,
	removeNoticeFromFavorite,
	addNotice,
	getUserNotices,
	removeNotice,
} from './notices-operations';

const initialState = {
	currentNotices: null,
	favorite: null,
	loading: false,
	error: null,
};

const noticesSlice = createSlice({
	name: 'notices',
	initialState,
	extraReducers: {
		[getNoticeByCategory.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getNoticeByCategory.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.currentNotices = payload;
		},
		[getNoticeByCategory.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		// [getOneNotice.pending]: store => {
		// 	store.loading = true;
		// 	store.error = null;
		// },
		// [getOneNotice.fulfilled]: (store, { payload }) => {
		// 	store.loading = false;
		// 	store.user = { ...store.user, payload };
		// },
		// [getOneNotice.rejected]: (store, { payload }) => {
		// 	store.loading = false;
		// 	store.error = payload;
		// },
		[addNoticeToFavorite.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[addNoticeToFavorite.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = [payload, ...store.user.pets];
		},
		[addNoticeToFavorite.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[getFavoriteNotices.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getFavoriteNotices.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = store.user.pets.filter(({ _id }) => _id !== payload.id);
		},
		[getFavoriteNotices.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[removeNoticeFromFavorite.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[removeNoticeFromFavorite.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = store.user.pets.filter(({ _id }) => _id !== payload.id);
		},
		[removeNoticeFromFavorite.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[addNotice.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[addNotice.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = store.user.pets.filter(({ _id }) => _id !== payload.id);
		},
		[addNotice.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[getUserNotices.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getUserNotices.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = store.user.pets.filter(({ _id }) => _id !== payload.id);
		},
		[getUserNotices.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[removeNotice.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[removeNotice.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = store.user.pets.filter(({ _id }) => _id !== payload.id);
		},
		[removeNotice.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export default noticesSlice.reducer;
