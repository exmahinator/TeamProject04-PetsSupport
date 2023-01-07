import { createSlice } from '@reduxjs/toolkit';

import {
	getNoticeByCategory,
	// getOneNotice,
	addNoticeToFavorite,
	getFavoriteNoticeForCategories,
	getFavoriteNoticeByUser,
	removeNoticeFromFavorite,
	getUserNotices,
	removeNotice,
} from './notices-operations';

const initialState = {
	currentNotices: [],
	favorite: [],
	loading: false,
	error: null,
};

const noticesSlice = createSlice({
	name: 'notices',
	initialState,
	extraReducers: {
		//! Менять нельзя!
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
		//! Менять нельзя!
		[getUserNotices.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getUserNotices.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.currentNotices = payload;
		},
		[getUserNotices.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		//! Менять нельзя!
		[getFavoriteNoticeForCategories.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getFavoriteNoticeForCategories.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.currentNotices = payload;
		},
		[getFavoriteNoticeForCategories.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		//! Менять нельзя!
		[getFavoriteNoticeByUser.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getFavoriteNoticeByUser.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.favorite = payload;
		},
		[getFavoriteNoticeByUser.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		//! а дальше всё можно, думайте, как нужно лучше:
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
			store.favorite.push(payload.favorite.id[0]);
			//нужен объект favorite вместо id
		},
		[addNoticeToFavorite.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[removeNoticeFromFavorite.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[removeNoticeFromFavorite.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.favorite = store.favorite.filter(({ _id }) => _id !== payload.id);
		},
		[removeNoticeFromFavorite.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		// [addNotice.pending]: store => {
		// 	store.loading = true;
		// 	store.error = null;
		// },
		// [addNotice.fulfilled]: (store, { payload }) => {
		// 	store.loading = false;
		// },
		// [addNotice.rejected]: (store, { payload }) => {
		// 	store.loading = false;
		// 	store.error = payload;
		// },
		[removeNotice.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[removeNotice.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.currentNotices = store.currentNotices.filter(
				({ _id }) => _id !== payload.id
			);
		},
		[removeNotice.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export default noticesSlice.reducer;
