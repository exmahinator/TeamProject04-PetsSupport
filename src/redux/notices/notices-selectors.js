export const getNoticesError = ({ notices }) => notices.error;
export const getNoticesLoading = ({ notices }) => notices.loading;
export const getCurrentNotices = ({ notices }) => notices.currentNotices;
export const getFavoriteNotices = ({ notices }) => notices.favorite;
export const getTotalPages = ({ notices }) => notices.totalPages;
export const getFilter = ({ notices }) => notices.queryParams.filter;
export const getCategory = ({ notices }) => notices.queryParams.category;
export const getPage = ({ notices }) => notices.queryParams.page;


export const getIsAddedSuccess = ({ notices }) => notices.isAddedSuccess;

