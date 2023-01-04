import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, current } from './auth-operations';

const initialState = {
	user: null,
	isLogin: false,
	token: '',
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[register.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user = payload.user;
		},
		[register.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[login.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[login.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user = payload.user;
			store.token = payload.accessToken;
			store.isLogin = true;
		},
		[login.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[logout.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[logout.fulfilled]: store => {
			store.loading = false;
			store.user = null;
			store.token = '';
			store.isLogin = false;
		},
		[logout.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[current.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[current.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user = payload;
			// store.token = '';
			store.isLogin = true;
		},
		[current.rejected]: (store, { payload }) => {
			store.loading = false;
			store.token = '';
			store.error = payload;
		},
	},
});

export default authSlice.reducer;
