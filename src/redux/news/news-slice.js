import { createSlice } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist';
import { getAllNews } from './news-operations';

const initialState = {
	news: [],
	loading: false,
	error: null,
	totalPages: 1,
	queryParams: {
		page: 1,
		filter: ''
	}
};

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setQueryParams: (state, { payload: { page = 1, query = '' } }) => {
			console.log(page, query)
			state.queryParams = {page, query}
		},
		setTotalPages: (state, {payload}) => {
			state.totalPages = payload
		}
	},
	extraReducers: {
		[getAllNews.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getAllNews.fulfilled]: (store, { payload:{news, totalPages} }) => {
			store.loading = false;
			store.news = news;
			store.totalPages = totalPages;
		},
		[getAllNews.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export const { setTotalPages, setQueryParams } = newsSlice.actions;

const newsReducer = newsSlice.reducer;

const persistConfig = {
	key: 'newsQueryParams',
	storage: storageSession,
	whitelist: ['queryParams'],
};

const persistedNewsReducer = persistReducer(persistConfig, newsReducer);

export default persistedNewsReducer;
