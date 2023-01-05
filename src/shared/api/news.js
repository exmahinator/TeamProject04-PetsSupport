import instance from './auth';

export const getAllNews = async () => {
	const { data } = await instance.get('/news');
	return data;
};
