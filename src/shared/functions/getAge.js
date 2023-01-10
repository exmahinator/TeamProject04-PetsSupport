export function getAge(birthDate) {
	const dateToday = Date.now();

	const birthday = normalizeDate(birthDate);
	const ageMs = dateToday - birthday;
	const age = Math.floor(ageMs / 31536000000);

	return age;
}

function normalizeDate(date) {
	const array = date.split('.');
	const result = [array[1], array[0], array[2]];

	return new Date(result.join('.'));
}
