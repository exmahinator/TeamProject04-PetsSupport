export const getAuthError = ({ auth }) => auth.error;
export const isAuth = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getToken = ({ auth }) => auth.token;
export const getIsFirstQuery = ({ auth }) => auth.isFirstQuery;
export const getUserId = ({ auth }) => auth.userId;
export const getIsLoading = ({ auth }) => auth.loading;
