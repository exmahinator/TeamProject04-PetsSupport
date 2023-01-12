import { createSlice } from '@reduxjs/toolkit';

import {
	getUserData,
	updateUserData,
	addUserPet,
	removeUserPet,
} from './user-operations';

const initialState = {
	user: { avatarURL: null, userInfo: {} },
	loading: false,
	userLoading: false,
	error: null,
	addPetError: null,
	isLoadingUpdate: false,
	isDisabledFields: false,
	isAddedPetSuccess: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleIsDisablet(store) {
			store.isDisabledFields = true;
		},
		resetIsAddedPetSuccess: state => {
			state.isAddedPetSuccess = false;
		},
	},
	extraReducers: {
		[getUserData.pending]: store => {
			store.loading = true;
			store.userLoading = true;
			store.error = null;
		},
		[getUserData.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.userLoading = false;
			store.user = payload.user;
		},
		[getUserData.rejected]: (store, { payload }) => {
			store.loading = false;
			store.userLoading = false;
			store.error = payload;
		},
		[updateUserData.pending]: store => {
			store.loading = true;
			store.error = null;
			store.isLoadingUpdate = true;
			store.isDisabledFields = false;
		},
		[updateUserData.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user = { ...store.user, ...payload.user };
			store.isLoadingUpdate = false;
		},
		[updateUserData.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
			store.isLoadingUpdate = false;
		},
		[addUserPet.pending]: store => {
			store.loading = true;
			store.error = null;
			store.addPetError = null;
		},
		[addUserPet.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.addPetError = null;
			store.user.pets = [payload, ...store.user.pets];
			store.isAddedPetSuccess = true;
		},
		[addUserPet.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
			store.addPetError = true;
		},
		[removeUserPet.pending]: store => {
			store.loading = true;
			store.error = null;
		},
		[removeUserPet.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user.pets = store.user.pets.filter(({ _id }) => _id !== payload.id);
		},
		[removeUserPet.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export const { toggleIsDisablet, resetIsAddedPetSuccess } = userSlice.actions;
export default userSlice.reducer;
