import instance from './auth';

export const getAllServices = async () => {
	const { data } = await instance.get('/services');
	return data;
};
