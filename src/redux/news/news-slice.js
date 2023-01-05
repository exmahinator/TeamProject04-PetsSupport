import { createSlice } from '@reduxjs/toolkit';

import { getAllNews } from './news-operations';

const initialState = {
	news: [],
	loading: false,
	error: null,
};

const newsSlice = createSlice({
	name: 'news',
	initialState,
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

export default newsSlice.reducer;
