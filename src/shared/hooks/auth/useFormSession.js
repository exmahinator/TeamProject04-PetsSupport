export const useFormSession = () => {
	const getSessionData = () => {
		const defaultVal =
			JSON.parse(window.sessionStorage.getItem('formValues')) ?? {};
		const { name = '', city = '', email = '', phone = '' } = defaultVal;

		return {
			name,
			city,
			email,
			phone,
			password: '',
			confirmPassword: '',
		};
	};
	const setSessionData = ({ name = '', city = '', phone = '', email = '' }) => {
		const formValues = JSON.stringify({ name, city, phone, email });
		window.sessionStorage.setItem('formValues', formValues);
	};

	return { getSessionData, setSessionData };
};
