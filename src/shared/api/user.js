import instance from './auth';

export const getUserData = async () => {
	const { data } = await instance.get('/user');
	return data;
};

export const updateUserData = async data => {
	const { data: result } = await instance.put('/user', data);
	return result;
};

export const addUserPet = async data => {
	const { data: result } = await instance.post('/pets', data);
	return result;
};

export const removeUserPet = async id => {
	const { data: result } = await instance.delete(`/pets/${id}`);
	return result;
};
