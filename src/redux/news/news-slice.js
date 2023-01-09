import { createSlice } from '@reduxjs/toolkit';

import { getAllNews } from './news-operations';

const initialState = {
	news: [],
	loading: false,
	error: null,
	totalPages: 4,
	filter: '',
};

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setFilter: (state, {payload}) => {
			state.filter = payload
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

export const { setFilter } = newsSlice.actions;

export default newsSlice.reducer;
