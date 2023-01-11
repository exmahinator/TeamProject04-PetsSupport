import { createSlice } from '@reduxjs/toolkit';

import {
	getNoticeByCategory,
	addNotice,
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
	filter: '',
	totalPages: 4,
	queryParams: { page: 1 },
	isAddedSuccess: false,

};

const noticesSlice = createSlice({
	name: 'notices',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
		setQueryParams: (state, { payload: { page = 1 } }) => {
			state.queryParams = { page };
		},
		setTotalPages: (state, { payload }) => {
			state.totalPages = payload;
		},
		resetIsAddedSuccess: state => {
			state.isAddedSuccess = false;
		},
	},
	extraReducers: {
		//! Менять нельзя!
		[getNoticeByCategory.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getNoticeByCategory.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.currentNotices = payload.notices;
			store.totalPages = payload.totalPages;
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
			store.favorite = payload.map(el => el._id);
		},
		[getFavoriteNoticeByUser.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		//! Менять нельзя!
		[addNoticeToFavorite.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[addNoticeToFavorite.fulfilled]: (store, { payload }) => {
			store.loading = false;
			const addedNotice = payload.favorite.length - 1;
			store.favorite.push(payload.favorite[addedNotice]);
		},
		[addNoticeToFavorite.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		//! Менять нельзя!
		[removeNoticeFromFavorite.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[removeNoticeFromFavorite.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.favorite = store.favorite.filter(id => id !== payload.id);
			store.currentNotices = store.currentNotices.filter(
				({ _id }) => _id !== payload.id
			);
		},
		[removeNoticeFromFavorite.rejected]: (store, { payload }) => {
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
		[addNotice.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[addNotice.fulfilled]: (store, { payload }) => {
			store.isAddedSuccess = true;
			store.loading = false;
			if (store.currentNotices[0].category === payload.category) {
				store.currentNotices = [payload, ...store.currentNotices];
			}
		},
		[addNotice.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
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

export const { setFilter, setQueryParams, setTotalPages, resetIsAddedSuccess } =
	noticesSlice.actions;

export default noticesSlice.reducer;
