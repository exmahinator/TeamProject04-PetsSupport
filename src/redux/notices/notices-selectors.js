import { createSelector } from '@reduxjs/toolkit';

export const getNoticesError = ({ notices }) => notices.error;
export const getNoticesLoading = ({ notices }) => notices.loading;
export const getCurrentNotices = ({ notices }) => notices.currentNotices;
export const getFavoriteNotices = ({ notices }) => notices.favorite;
export const getFilter = ({ notices }) => notices.filter;
export const getPage = ({ notices }) => notices.page;
export const getTotalPages = ({ notices }) => notices.totalPages;
export const getQueryParams = ({ notices }) => notices.queryParams;
export const getIsAddedSuccess = ({ notices }) => notices.isAddedSuccess;

export const getFilteredNotices = createSelector(
	[getCurrentNotices, getFilter],
	(data, filter = '') => {
		const optimizedFilter = filter.toLowerCase();
		const filtersArr = optimizedFilter.split(' ');
		const notices = [];
		for (let i = 0; i < data.length; i++) {
			let found = true;
			const item = data[i];
			for (let j = 0; j < filtersArr.length; j++) {
				if (!filtersArr[j]) continue;
				if (!item.title.includes(filtersArr[j])) found = false;
			}
			if (found) notices.push(data[i]);
		}

		return notices;
	}
);
