import { createSlice } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist';

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
	totalPages: 1,
	isAddedSuccess: false,
	queryParams: {
		filter: '',
		category: 'sell',
		page: 1,
	}
};

const noticesSlice = createSlice({
	name: 'notices',
	initialState,
	reducers: {
		setQueryParams: (state, { payload }) => {			
			const { page = 1, filter = '', category = state.queryParams.category } = payload;
			state.queryParams.filter = filter;
			state.queryParams.category = category;
			state.queryParams.page = page;
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
			store.favorite = payload.map(el => el._id);
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
			store.isAddedSuccess = true;
			store.loading = false;
			if ([payload.category, 'own'].includes(store.queryParams.category)){
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


export const { setQueryParams,  setTotalPages, resetIsAddedSuccess } =
	noticesSlice.actions;

const noticesReducer = noticesSlice.reducer

const persistConfig = {
	key: 'noticesQueryParams',
	storage: storageSession,
	whitelist: ['queryParams'],
};

const persistedNoticesReducer = persistReducer(persistConfig, noticesReducer)

export default persistedNoticesReducer;
