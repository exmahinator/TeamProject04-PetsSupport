import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
	baseURL: REACT_APP_API_URL,
});

const setToken = token => {
	if (token) {
		return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
	}
	instance.defaults.headers.common.authorization = '';
};

instance.interceptors.response.use(
	response => response,
	async error => {
		if (error.response.status === 401) {
			const refreshToken = localStorage.getItem('refreshToken');
			try {
				const { data } = await instance.post('/auth/refresh', { refreshToken });

				setToken(data.accessToken);
				localStorage.setItem('refreshToken', data.refreshToken);

				return instance(error.config);
			} catch (error) {
				return Promise.reject(error);
			}
		} else {
			return Promise.reject(error);
		}
	}
);

export const register = async data => {
	const { data: result } = await instance.post('/auth/register', data);
	return result;
};

export const login = async data => {
	const { data: result } = await instance.post('/auth/login', data);
	setToken(result.accessToken);
	localStorage.setItem('refreshToken', result.refreshToken);
	return result;
};

export const logout = async () => {
	const data = await instance.get('/auth/logout');
	setToken();
	localStorage.removeItem('refreshToken');
	return data;
};

export const getCurrent = async token => {
	try {
		setToken(token);
		const { data } = await instance.get('/auth/current');
		return data;
	} catch (error) {
		setToken();
		throw error;
	}
};

export default instance;
