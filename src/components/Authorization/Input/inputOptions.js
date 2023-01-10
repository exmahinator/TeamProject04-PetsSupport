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
	label: 'Location'
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

export const petName = {
	label: 'Name pet',
	name: 'name',
	type: 'text',
	placeholder: 'Type pet name',
	required: true,
	requiredMessage: "Enter your pet's name",
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,	
	patternMessage: 'Latin only, min 2, max 16',
	maxLength: 16,
	minLength: 2, 
};
export const petBirth = {
	label: 'Date of Birth',
	name: 'birthday',
	type: 'text',
	placeholder: 'Type date of birth',
	required: true,
	requiredMessage: 'Enter the date of birth',
	pattern: /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/i,
	patternMessage: '01.01.2020',
};
export const petBreed = {
	label: 'Breed',
	name: 'breed',
	type: 'text',
	placeholder: 'Type breed',
	required: true,
	requiredMessage: "Enter your pet's breed",
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,	
	patternMessage: 'Latin only, min 2, max 16',
	maxLength: 16,
	minLength: 2, 
};
export const petComment = {
	label: 'Comments',
	name: 'comments',
	type: 'text',
	placeholder: 'Type comments',
	required: true,
	requiredMessage: "Enter your comment",
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,	
	patternMessage: 'Latin only, min 8, max 120',
	maxLength: 120,
	minLength: 8, 
};
export const petAdTitle = {
	label: 'Tittle of ad',
	name: 'titleAd',
	type: 'text',
	placeholder: 'Type name',
	required: true,
	requiredMessage: "Enter your title name",
	pattern: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,	
	patternMessage: 'Latin only, min 8, max 120',
	maxLength: 48,
	minLength: 2, 
};
export const petPrice = {
	label: 'Price',
	name: 'price',
	type: 'number',
	placeholder: 'Type price',
	required: true,
	requiredMessage: "Enter the price",
	pattern: /^[1-9]{1,10}$/i,	
	// ^[1-9]{1,10}$
	patternMessage: "Price can't start with 0",

};
