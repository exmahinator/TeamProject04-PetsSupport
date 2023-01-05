import instance from './auth';

export const getNoticeByCategory = async (params = 'goodhands') => {
	const { data } = await instance.get(`/notices?category=${params}`);
	return data;
};

export const getOneNotice = async id => {
	const { data } = await instance.get(`/notices/${id}`);
	return data;
};

export const addNoticeToFavorite = async id => {
	const { data } = await instance.patch(`/notices/toFavorite/${id}`);
	return data;
};

export const getFavoriteNotices = async () => {
	const { data } = await instance.get(`/notices/users/favorite`);
	return data;
};

export const removeNoticeFromFavorite = async id => {
	const { data } = await instance.patch(`/notices/removeFavorite/${id}`);
	return data;
};

export const addNotice = async data => {
	const { data: result } = await instance.post('/notices', data);
	return result;
};

export const getUserNotices = async () => {
	const { data } = await instance.get('/notices/users');
	return data;
};

export const removeNotice = async id => {
	const { data } = await instance.delete(`/notices/${id}`);
	return data;
};
