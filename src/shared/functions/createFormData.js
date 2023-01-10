export const createFormData = data => {
	const formDataToSend = new FormData();

	const key = Object.keys(data);
	const value = Object.values(data);

	for (let index = 0; index < key.length; index++) {
		if (key[index] !== 'avatar') {
			if (value[index].trim()) {
				formDataToSend.append(key[index], value[index]);
			}
		} else {
			if (value[index][0] !== undefined) {
				formDataToSend.append(key[index], value[index][0]);
			}
		}
	}
	return formDataToSend;
};
