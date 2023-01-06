import { createSlice } from '@reduxjs/toolkit';

import { getAllServices } from './services-operations';

const initialState = {
	services: [],
	loading: false,
	error: null,
};

const servicesSlice = createSlice({
	name: 'services',
	initialState,
	extraReducers: {
		[getAllServices.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[getAllServices.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.services = payload;
		},
		[getAllServices.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export default servicesSlice.reducer;
