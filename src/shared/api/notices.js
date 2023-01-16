import instance from './auth';


export const getNoticeByCategory = async ({ page = 1, category = 'sell', filter ='' }) => {
	let result;
	switch (category) {
			case 'favorite':
				result = await instance.get(`/notices/users/favorite?title=${filter}`);
				break;

			case 'own':
				result = await instance.get(`/notices/users?title=${filter}`);
				break;
			default:
				result = await instance.get(
		`/notices?limit=8&page=${page}&category=${category}&title=${filter}`
	);
				break;
		}
	const { data } = result;
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

export const getFavoriteNotices = async (params) => {
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
