import { createSlice } from '@reduxjs/toolkit';

import { getAllNews } from './news-operations';

const initialState = {
	news: [],
	loading: false,
	error: null,
	totalPages: 4,
	queryParams: {
		page: 1,
		filter: ''
	},
	filter: '',
	page:1,
};

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setFilter: (state, {payload}) => {
			state.filter = payload
		},
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
		[getAllNews.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.news = payload;
		},
		[getAllNews.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export const {  setTotalPages, setQueryParams } = newsSlice.actions;

export default newsSlice.reducer;
