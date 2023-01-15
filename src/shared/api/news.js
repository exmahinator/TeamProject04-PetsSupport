import instance from './auth';

export const getAllNews = async ({ page = 1, query = '' }) => {
	const { data } = await instance.get(`/news?limit=6&page=${page}&search=${query}`);
	return data;
};
