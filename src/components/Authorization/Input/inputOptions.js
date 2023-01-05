export const emailOpt = {
	name: 'email',
	type: 'email',
	placeholder: 'Email',
	required: true,
	requiredMessage: 'Email is required',
	pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	patternMessage: 'Invalid email address',
};
export const passwordOpt = {
	name: 'password',
	type: 'password',
	placeholder: 'Password',
	required: true,
	requiredMessage: 'Password is required',
	pattern: /^\S{7,32}$/i,
	patternMessage: 'Min 7 max 32 symbols',
};
export const confirmPasswordOpt = {
	name: 'passwordConfirm',
	type: 'password',
	placeholder: 'Confirm Password',
	required: true,
	requiredMessage: 'Confirm your password',
	confirmPassword: true,
	// pattern: /^\S{7,32}$/i,
	// patternMessage: 'Min 7 max 32 symbols'
};
export const nameOpt = {
	name: 'name',
	type: 'text',
	placeholder: 'Name',
	required: true,
	requiredMessage: 'Enter your name, please',
	pattern: /^[a-zA-Z]+$/i,
	patternMessage: 'Invalid name',
};
export const cityOpt = {
	name: 'city',
	type: 'text',
	placeholder: 'City, Region',
	required: true,
	requiredMessage: 'Enter your city and region, please',
	pattern: /^\s*(?:\w+\s*,\s*){1,}(?:\w+\s*)$/i,
	patternMessage: 'Format: Brovary, Kyiv',
};
export const phoneOpt = {
	name: 'phone',
	type: 'tel',
	placeholder: 'Phone',
	required: true,
	requiredMessage: 'Enter your phone, please',
	pattern: /^(0[5-9][0-9]\d{7})$/i,
	patternMessage: 'Phone format: 0971234567',
};
