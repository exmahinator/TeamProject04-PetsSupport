export const useFormSession = formName => {
	const setSessionData = data => {
		const formValues = JSON.stringify(data);
		window.sessionStorage.setItem(formName, formValues);
	};

	const getSessionData = () => {
		const defaultVal =
			JSON.parse(window.sessionStorage.getItem(formName)) ?? {};
		return defaultVal;
	};

	return { getSessionData, setSessionData };
};
